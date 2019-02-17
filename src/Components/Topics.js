import React, { Component } from 'react'
import Sorter from './Sorter'

import { Link } from '@reach/router'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import '../Styles/Topics.css'

class Topics extends Component {
  state = {
    topics: [],
    loading: true
  }

  render () {
    const { topics, loading } = this.state
    return (
      <div>
        <div>
          <div className='topics'>Topics: </div>
          {loading ? (
            <BarLoader color='grey' />
          ) : (
            topics.map(({ slug }) => {
              return (
                <div className='button_topic' key={slug}>
                  <Link to={`/topics/${slug}`}>{slug}</Link>
                </div>
              )
            })
          )}
        </div>
      </div>
    )
  }

  componentDidMount () {
    this.getTopics()
  }

  getTopics = () => {
    api
      .fetchTopics()
      .then(topics => {
        this.setState(() => ({
          topics,
          loading: false
        }))
      })
      .catch(console.log)
  }
  assignTopic = e => {
    this.setState(
      {
        chosenTopic: e.target.value
      },
      () => this.sortArticles()
    )
  }
}

export default Topics
