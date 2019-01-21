import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from '../api'

class Users extends Component {
  state = {
    users: [],
    loading: true
  }
  render () {
    const { users, loading } = this.state
    return (
      <div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          users.map(user => (
            <li key={user.username}>
              <Link to={user.username}>
                {' '}
                <p>{user.username}</p>
              </Link>
            </li>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.getUsers()
  }

  getUsers = () => {
    api
      .getUsers()
      .then(topic => {
        this.setState(() => ({
          topic,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Users
