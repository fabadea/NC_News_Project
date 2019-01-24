import React, { Component } from 'react'
import * as api from './api'

class User extends Component {
  state = { user: {} }
  render () {
    const { user } = this.state
    return (
      <div className='main'>
        <p className='user-profile'>{user.username}'s Profile</p>
        <p className='user-name'>Name: {user.name}</p>
        <img src={user.avatar_url} alt='profile' className='avatar' />
      </div>
    )
  }

  componentDidMount () {
    console.log(this.props.username)
    this.fetchUser(this.props.username)
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

export default User
