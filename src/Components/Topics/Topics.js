import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from '../api'

class Topics extends Component {
  state = {
    topics: [],
    loading: true
  }
  render () {
    const { topics, loading } = this.state
    return (
      <div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          topics.map(({ slug, description }) => (
            <ul key={slug}>
              <p>Topic: {slug} </p>
              <p>{description}</p>
            </ul>
          ))
        )}
      </div>
    )
  }

  componentDidMount () {
    this.getTopics()
  }

  getTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState(() => ({
          topics,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Topics
