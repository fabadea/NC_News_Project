import React, { Component } from 'react'
import '../Styles/ArticleDetail.css'
import Moment from 'react-moment'

class Comment extends Component {
  render () {
    const { body, author, created_at, votes } = this.props.comment

    return (
      <div className='article_user'>
        <p>{body}</p>
        <div className='cardData'>
          <div>by {author}</div>
          <Moment format='YYYY/MM/DD'>{created_at}</Moment>
          <div>{`votes: ${votes}`}</div>
        </div>
      </div>
    )
  }
}

export default Comment
