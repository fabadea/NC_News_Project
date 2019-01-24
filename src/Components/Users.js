import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import { Link } from '@reach/router'
import '../Styles/Users.css'

class Users extends Component {
  state = {
    users: [],
    loading: true
  }
  render () {
    const { users, loading } = this.state
    return (
      <div className='main'>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          users.map(user => (
            <li key={user.user_id} className='user'>
              <Link to={`/users/${user.username}`}>
                <img src={user.avatar_url} className='avatar' />
                {user.username}
              </Link>
            </li>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.fetchUser()
  }

  fetchUser = () => {
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
