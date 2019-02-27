import React, { Component } from 'react'
import axios from 'axios'
import Users from './Users'
import '../Styles/Auth.css'

class Auth extends Component {
  state = {
    input: '',
    noInput: false,
    hasError: false
  }
  render () {
    const { user, children } = this.props
    const { input, hasError } = this.state
    return user && user.username ? (
      children
    ) : (
      <div className='first_page'>
        <div className='first_page_msg'>
          Starving for some news?
          <br />
          Login first
        </div>
        <p className='msg'>Use one of the users provided below and login</p>
        {hasError && (
          <p className='msg'>Try again with one of the provided username</p>
        )}
        <form className='user_input_form' onSubmit={this.handleSubmit}>
          <input
            className='login_form'
            onChange={this.handleChange}
            placeholder='username here'
            type='text'
            value={input}
          />
          <button type='submit' className='button_submit_user'>
            login
          </button>
          <Users />
        </form>
      </div>
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    const { input } = this.state
    if (input.length < 1) {
      this.setState({ noInput: true, hasError: false })
    } else {
      axios
        .get(`https://nc-news-be-flaviu.herokuapp.com/api/users/${input}`)
        .then(({ data }) => {
          this.props.login(data)
        })
        .then(() => {
          this.setState({ input: '', hasError: false, noInput: false })
        })
        .catch(err => {
          this.setState({ hasError: true, noInput: false })
        })
    }
  }

  handleChange = e => {
    const { value } = e.target
    this.setState({
      input: value
    })
  }
}

export default Auth
