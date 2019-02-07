import React, { Component } from 'react'
import * as api from './api'

class Auth extends Component {
  state = {
    username: ''
  }
  render () {
    const { username } = this.state
    return username ? (
      this.props.children
    ) : (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type='text' id='username' onChange={this.handleChange} />
          <button className='buttonnext'>Submit</button>
        </form>
      </div>
    )
  }

  handleChange = event => {
    event.preventDefault()
    const username = event.target.value
    console.log(username)
    this.setState({ username })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username } = this.state
    api
      .fetchUsers()
      .then(users => {
        users.forEach(({ user }) => {
          if (user === username) {
            this.props.setUser(username)
          }
        })
      })
      .catch(console.log)
  }
}

// not working properly, can't spot the error

export default Auth
