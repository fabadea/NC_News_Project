import React, { Component } from 'react'
import * as api from './api'
import { navigate } from '@reach/router'

class Deleter extends Component {
  render () {
    const { article_id, comment_id } = this.props
    return !comment_id ? (
      <button onClick={() => this.deleter(article_id)}>delete</button>
    ) : (
      <button onClick={() => this.deleter(comment_id)}>delete</button>
    )
  }

  deleter = () => {
    const { article_id, comment_id } = this.props
    console.log(article_id)
    console.log(comment_id)

    api
      .deleteById(article_id, comment_id)
      .then(() => navigate('/'))
      .catch(console.log)
  }
}

export default Deleter
