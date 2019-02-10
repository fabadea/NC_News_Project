import React, { Component } from 'react'
import Comments from './Comments'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from './api'
import '../Styles/ArticleDetail.css'
import Voter from './Voter'
import Deleter from './Deleter'
import { Router } from '@reach/router'
import axios from 'axios'
import ArticleNotFound from './ArticleNotFound'

class ArticleDetail extends Component {
  state = {
    loading: true,
    article: {},
    newComment: '',
    hasError: false
  }

  render () {
    const {
      article: { article_id, votes, topic, title, body, author },
      loading,
      newComment,
      hasError
    } = this.state
    const { user, id } = this.props
    if (hasError) return <ArticleNotFound />

    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div className='article_info'>
        <h4>{title}</h4>
        <p>{body}</p>
        <Link to={`/users/${author}`}>
          <p className='article_user'>
            {`author: ${author}`}
            <br /> {`> see user's details`}
          </p>
        </Link>
        <Link to={`/topics/${topic}`}>
          <p className='article_user'>
            {`topic: ${topic}`} <br /> {`> see other articles for this topic`}
          </p>
        </Link>
        <form className='article_info' onSubmit={this.postNewComment}>
          <input onChange={this.handleChange} type='text' value={newComment} />
          <button type='sumbit'>submit comment</button>
        </form>
        <Voter votes={votes} article_id={id} />
        {user.username === author ? <Deleter article_id={article_id} /> : null}

        <Link to={`/articles/${id}/comments`}>
          <button>Get Comments</button>
          <br />
          <br />
        </Link>
        <Router>
          <Comments path='comments' user={user} />
        </Router>
      </div>
    )
  }

  componentDidMount = () => {
    this.getArticle()
  }

  getArticle = () => {
    const { id } = this.props
    api
      .fetchArticle(id)
      .then(article => this.setState({ article, loading: false }))
      .catch(console.log)
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
    const username = this.props.user
    const body = { body: newComment, username }
    if (newComment) {
      axios
        .post(
          `https://nc-news-be-flaviu.herokuapp.com/api/articles/${id}/comments`,
          body
        )
        .then(({ data }) => {
          this.setState({
            comments: [data.comment, ...this.state.comments],
            newComment: ''
          })
        })
    }
  }
}

export default ArticleDetail
