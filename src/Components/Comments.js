import React, { Component } from 'react'
import Comment from './Comment'
import * as api from './api'

class Comments extends Component {
  state = {
    comments: [],
    page: 1
  }

  render () {
    const { id, user } = this.props
    const { comments, page } = this.state
    return (
      <div>
        <h4>Comments: </h4>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.comment_id}
              comment={comment}
              id={id}
              user={user}
              deleteComment={this.deleteComment}
            />
          )
        })}
        <form onSubmit={this.handleSubmit}>
          <button
            className='buttonback'
            onClick={() => {
              this.handleClick(-1)
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className='buttonnext'
            onClick={() => {
              this.handleClick(1)
            }}
            disabled={comments.length < 10}
          >
            More
          </button>
          {/* these bottons/this form won't work if i get rid of the css (this is strange to me, maibe because hover:enabled? and also the orange border around the button) */}
        </form>
      </div>
    )
  }

  componentDidMount = () => {
    const { page } = this.state
    this.getComments(page)
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { id } = this.props
    const { page } = this.state
    if (id !== prevProps.id) {
      this.getComments(page)
    }
    if (page !== prevState.page) {
      this.getComments(page)
    }
  }

  getComments = page => {
    const { id } = this.props
    api
      .fetchComments(id, page)
      .then(comments => this.setState({ comments }))
      .catch(console.log)
  }

  handleClick = increment => {
    const { page } = this.state
    this.setState({ page: page + increment })
  }

  handleSubmit = event => {
    const { page } = this.state
    event.preventDefault()
    this.getComments(page)
  }
  deleteComment = idDeletedComment => {
    this.setState(prevState => ({
      comments: prevState.comments.filter(
        ({ comment_id }) => comment_id !== idDeletedComment
      )
    }))
  }
}

export default Comments
