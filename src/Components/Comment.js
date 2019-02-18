import React, { Component } from 'react'
import '../Styles/ArticleDetail.css'
import Moment from 'react-moment'
import Voter from './Voter'
// import Deleter from './Deleter'
import axios from 'axios'
import { navigate } from '@reach/router'

class Comment extends Component {
  state = {
    comment: {}
  }
  render () {
    const { user, id } = this.props
    const { comment } = this.state
    // const {
    //   comments: comment_id,
    //   body,
    //   author,
    //   created_at,
    //   votes
    // } = this.props.comment
    console.log(comment)
    return (
      <div className='article_user'>
        <p>{comment.body}</p>
        <div className='cardData'>
          <div>by {comment.author}</div>
          <Moment format='YYYY/MM/DD'>{comment.created_at}</Moment>
          <Voter
            votes={comment.votes}
            comment_id={comment.comment_id}
            id={id}
          />
          {/* {user.username === author ? (
            <Deleter comment_id={comment_id} id={id} />
          ) : null} */}
          {user.username === comment.author ? (
            <button type='button' onClick={this.deleteComment}>
              delete
            </button>
          ) : null}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.setState({
      comment: this.props.comment
    })
  }

  deleteComment = () => {
    const { id } = this.props
    const { comment_id } = this.props.comment
    axios
      .delete(
        `https://nc-news-be-flaviu.herokuapp.com/api/articles/${id}/comments/${comment_id}`
      )
      .then(() => this.props.handleCommentDelete(comment_id))
  }
}

export default Comment
