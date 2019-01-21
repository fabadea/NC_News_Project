import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
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
          topics.map(topic => (
            <li key={topic.slug}>
              <Link to={topic.slug}>
                {' '}
                <p>{topic.slug}</p>
              </Link>
            </li>
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
      .then(topic => {
        this.setState(() => ({
          topic,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Topics
