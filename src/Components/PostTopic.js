import React, { Component } from 'react'
import '../Styles/Topics.css'
import axios from 'axios'

class PostTopic extends Component {
  state = {
    slug: '',
    description: '',
    reqSent: false,
    error: false,
    error422: false,
    resRecieved: false
  }
  render () {
    const { reqSent, error, error422 } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='col-25'>
              <label>Slug</label>
            </div>
            <div className='col-75'>
              <input
                type='text'
                onChange={this.handleSlug}
                placeholder='title'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-25'>
              <label>Details </label>
            </div>
            <div className='col-75'>
              <textarea
                placeholder='description'
                onChange={this.handleDescription}
              />
              <button type='submit' className='button_topic_art'>
                submit
              </button>
            </div>
          </div>
        </form>

        {error && !reqSent && (
          <p>Post failed, please ensure topic name is completed</p>
        )}
        {error422 && <p>Topic already exists</p>}
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const { slug, description } = this.state
    if (slug.length < 1) {
      this.setState({ error: true })
    } else {
      const newTopic = { slug, description }
      this.setState({ reqSent: true, error422: false })
      axios
        .post('https://nc-news-be-flaviu.herokuapp.com/api/topics', newTopic)
        .then(res => {
          this.setState(
            {
              resRecieved: true,
              error: false,
              error422: false,
              reqSent: false
            },
            () => {
              setTimeout(() => {
                this.props.handleClose()
              }, 2000)
            }
          )
        })
        .catch(res => {
          if (res.response.status === 422) {
            this.setState({ error422: true, reqSent: false })
          }
        })
    }
  }
  handleSlug = e => {
    this.setState({ slug: e.target.value })
  }
  handleDescription = e => {
    this.setState({ description: e.target.value })
  }
}

export default PostTopic
