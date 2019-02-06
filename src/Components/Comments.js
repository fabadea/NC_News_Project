import React, { Component } from 'react'
import Comment from './Comment'
import * as api from './api'

class Comments extends Component {
  state = {
    comments: [],
    // loading: true
  }
  render () {
    const { comments, /*loading*/ } = this.state
    return (
      <div>
        <h4>Comments: </h4>
        {comments.map(comment => {
          return <Comment key={comment.comment_id} comment={comment} />
        })}
      </div>
    )
  }

  componentDidMount = () => {
    this.getComments()
  }

  getComments = () => {
    const { id } = this.props
    api
      .fetchComments(id)
      .then(comments => this.setState({ comments }))
      .catch(console.log) //err => this.setState({ err, loading: false }))
  }
}

export default Comments
