import React, { Component } from 'react'
import '../App.css'
import { fetchComments } from './api'
import Comment from './Comment'

class Comments extends Component {
  state = {
    comments: []
  }

  render () {
    const { comments } = this.state
    const { id, user } = this.props
    return (
      <div>
        <h4>Comments: </h4>

        {comments.map(comment => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            id={id}
            user={user}
          />
        ))}
      </div>
    )
  }

  async componentDidMount () {
    const comments = await fetchComments(this.props.id)
    this.setState({ comments })
  }
}

export default Comments
