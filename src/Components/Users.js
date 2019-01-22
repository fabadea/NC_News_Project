import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'

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
          users.map(({ username }) => (
            <ul key={username}>
              <p>{username}</p>
            </ul>
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
      .then(users => {
        this.setState(() => ({
          users,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Users
