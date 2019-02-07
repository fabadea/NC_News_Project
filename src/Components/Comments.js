import React, { Component } from 'react'
import Comment from './Comment'
import * as api from './api'

class Comments extends Component {
  state = {
    comments: [],
    page: 1
    // loading: true
  }
  render () {
    const { comments /* loading */, page } = this.state
    return (
      <div>
        <h4>Comments: </h4>
        {comments.map(comment => {
          return <Comment key={comment.comment_id} comment={comment} />
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
              console.log('here')

              this.handleClick(1)
            }}
            disabled={comments.length < 10}
          >
            More
          </button>
          {/* these bottons/this form won't work if i get rid of the css (this is strange for me, and also the orange border) */}
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
      .catch(console.log) // err => this.setState({ err, loading: false }))
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
}

export default Comments
