import React, { Component } from 'react'
import '../Styles/ArticleDetail.css'
import Moment from 'react-moment'
import Voter from './Voter'
import Deleter from './Deleter'
import { navigate } from '@reach/router'

class Comment extends Component {
  state = {}
  render () {
    const { user, id } = this.props
    const { comment_id, body, author, created_at, votes } = this.props.comment

    return (
      <div className='article_user'>
        <p>{body}</p>
        <div className='cardData'>
          <div>by {author}</div>
          <Moment format='YYYY/MM/DD'>{created_at}</Moment>
          <Voter votes={votes} comment_id={comment_id} id={id} />
          {user.username === author ? (
            <Deleter comment_id={comment_id} id={id} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default Comment
