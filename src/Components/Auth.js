import React, { Component } from 'react'
import axios from 'axios'
import Users from './Users'

class Auth extends Component {
  state = {
    input: '',
    hasError: false
  }
  render () {
    const { user, children } = this.props
    const { hasError } = this.state
    if (user) {
      return children
    } else {
      const { input } = this.state
      return (
        <div className='content'>
          <h4>Starving for some news? Login first</h4>
          <p>Use one of users provided bellow and login</p>
          {hasError && <h4>Try again with one of provided username</h4>}
          <form className='content' onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleChange}
              placeholder='username here'
              type='text'
              value={input}
            />
            <button type='submit' className='buttonnext'>
              submit
            </button>
            <Users />
          </form>
        </div>
      )
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { input } = this.state
    axios
      .get(`https://nc-news-be-flaviu.herokuapp.com/api/users/${input}`)
      .then(({ data }) => {
        if (data) {
          this.props.setUser(input)
          this.setState({
            input: ''
          })
        }
      })
      .catch(err => {
        this.setState({
          hasError: true
        })
      })
  }
}

export default Auth
