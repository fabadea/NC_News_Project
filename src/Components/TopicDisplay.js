import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import '../Styles/Left.css'
import { Link } from '@reach/router'

class TopicsDisplay extends Component {
  state = {
    topics: [],
    loading: true
  }
  render () {
    const { topics, loading } = this.state
    return (
      <div className='column.side'>
        <h3>About what do you like to read today?</h3>

        {loading ? (
          <BarLoader color='grey' />
        ) : (
          topics.map(topic => (
            <div key={topic.slug} className='buttonParrent'>
              <Link to={`/topics/${topic.slug}`}>
                <button
                  className='button'
                  name={topic.slug}
                  onClick={() => this.toggleActive(topic.slug)}
                >
                  {topic.slug.toLowerCase()}
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    )
  }

  toggleActive = target => {
    target === this.state.open
      ? this.setState({ select: null })
      : this.setState({ select: target })
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

export default TopicsDisplay
