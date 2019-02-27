import React, { Component } from 'react'
import '../Styles/ArticleDetail.css'
import Moment from 'react-moment'
import Voter from './Voter'
// import Deleter from './Deleter'
import axios from 'axios'
import { FaExclamationCircle } from 'react-icons/lib/fa'

class Comment extends Component {
  state = {
    comment: {}
  }
  render () {
    const { user, id } = this.props
    const { comment } = this.props
    // const {
    //   comments: comment_id,
    //   body,
    //   author,
    //   created_at,
    //   votes
    // } = this.props.comment
    return (
      <div className='article_user'>
        <p className='art_body'>{comment.body}</p>
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
          <div className='votebutton_parent'>
            {user.username === comment.author ? (
              <button
                className='votebutton'
                type='button'
                onClick={this.deleteComment}
              >
                delete
                <FaExclamationCircle
                  style={{ fontSize: '3vh', color: 'red', textAlign: 'center' }}
                />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  // componentDidMount () {
  //   this.setState({
  //     comment: this.props.comment
  //   })
  // }

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
