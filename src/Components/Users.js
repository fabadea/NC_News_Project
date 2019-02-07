import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import { Link } from '@reach/router'
import '../Styles/Users.css'

class Users extends Component {
  state = { users: {}, loading: true }
  render () {
    const { users, loading } = this.state

    return (
      <div>
        <div className='title'>All users: </div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          users.map(user => (
            <div key={user.username} className='user'>
              <Link to={`/users/${user.username}`}>{user.username}</Link>
            </div>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.getUser()
  }

  getUser = () => {
    api
      .fetchUsers()
      .then(users => {
        this.setState(() => ({
          users,
          loading: false
        }))
      })
      .catch(console.log)
  }
}

export default Users
