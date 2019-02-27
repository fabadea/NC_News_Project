import React, { Component } from 'react'
import Comment from './Comment'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from './api'
import '../Styles/ArticleDetail.css'
import Voter from './Voter'
// import Deleter from './Deleter'
import axios from 'axios'
import ArticleNotFound from './ArticleNotFound'
import { navigate } from '@reach/router'
import { FaExclamationCircle } from 'react-icons/lib/fa'

class ArticleDetail extends Component {
  state = {
    loading: true,
    article: {},
    newComment: '',
    hasError: false,
    comments: []
  }

  render () {
    const {
      article: { votes, topic, title, body, author },
      loading,
      newComment,
      hasError,
      comments
    } = this.state
    const { user, id } = this.props
    // console.log(comments)

    if (hasError) return <ArticleNotFound />
    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div className='article_info'>
        <h4 className='art_title'>{title}</h4>
        <p className='art_body'>{body}</p>
        <div className='article_user'>
          <Link to={`/users/${author}`}>
            <p>
              {`author: ${author}`}
              <br /> {`> see user's details`}
            </p>
          </Link>
          <p>
            {user.username === author ? (
              <button className='votebutton' onClick={this.deleteArticle}>
                delete
                <FaExclamationCircle
                  style={{ fontSize: '3vh', color: 'red' }}
                />
              </button>
            ) : null}
          </p>
        </div>
        <Link to={`/topics/${topic}`}>
          <p className='article_user'>
            {`topic: ${topic}`} <br /> {`> see other articles for this topic`}
          </p>
        </Link>

        <Voter votes={votes} article_id={id} />
        {/* {user.username === author ? <Deleter article_id={article_id} /> : null} */}

        <div>
          <h4>Comments: </h4>
          <form onSubmit={this.postNewComment}>
            <input
              required
              onChange={this.handleChange}
              type='text'
              value={newComment}
            />
            <button type='sumbit'>submit new comment</button>
          </form>
          {comments &&
            comments.map(comment => {
              return (
                <Comment
                  // key={comment.comment_id}
                  comment={comment}
                  id={id}
                  user={this.props.user}
                  handleCommentDelete={this.handleCommentDelete}
                />
              )
            })}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.getArticle()
    this.getComments()
  }

  getArticle = () => {
    const { id } = this.props
    api
      .fetchArticle(id)
      .then(article => this.setState({ article, loading: false }))
      .catch(err => {
        this.setState({
          hasError: true
        })
      })
  }

  getComments = () => {
    const { id } = this.props
    axios
      .get(
        `https://nc-news-be-flaviu.herokuapp.com/api/articles/${id}/comments`
      )
      .then(({ data }) => {
        this.setState({
          comments: data.comments
        })
      })
  }

  handleChange = e => {
    this.setState({
      newComment: e.target.value
    })
  }

  postNewComment = e => {
    e.preventDefault()
    const { id } = this.props
    const { newComment } = this.state
    const username = this.props.user.username
    const body = { body: newComment, username }
    if (newComment) {
      axios
        .post(
          `https://nc-news-be-flaviu.herokuapp.com/api/articles/${id}/comments`,
          body
        )
        .then(({ data }) => {
          console.log(data.comment)
          this.setState(state => ({
            comments: [data.comment[0], ...state.comments],
            newComment: ''
          }))
        })
    }
  }

  deleteArticle = () => {
    const { id } = this.props
    axios
      .delete(`https://nc-news-be-flaviu.herokuapp.com/api/articles/${id}`)
      .then(() => navigate('/articles'))
  }

  handleCommentDelete = id => {
    const comments = this.state.comments.filter(comment => {
      return comment.comment_id !== id
    })
    this.setState({
      comments: comments
    })
  }
}

export default ArticleDetail
