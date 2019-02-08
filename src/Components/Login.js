import React, { Component } from 'react'

class Login extends Component {
  state = {
    username: ''
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Type your username here </label>
        <input type='text' id='username' onChange={this.handleChange} />
        <button className='buttonnext'>Submit</button>
      </form>
    )
  }
  handleChange = event => {
    const { value } = event.target
    this.setState({ username: value })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.setUser(this.state.username)
  }
}

export default Login
