import React, { Component } from 'react'
import { Link } from '@reach/router'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import '../Styles/NavBar.css'

class NavBar extends Component {
  state = {
    topics: [],
    loading: true
  }

  render () {
    const { topics, loading } = this.state
    return (
      <div className='navBar'>
        <Link className='button' to='/users'>
          Users
        </Link>
        <div className='topics'>Topics: </div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          topics.map(({ slug }) => {
            return (
              <div className='button' key={slug}>
                <Link to={`/topics/${slug}`}>{slug}</Link>
              </div>
            )
          })
        )}
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
}

export default NavBar
