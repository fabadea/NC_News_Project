import React, { Component } from 'react'
import '../Styles/Header.css'
import { Link } from '@reach/router'

class Header extends Component {
  render () {
    const { user } = this.props
    return (
      <header>
        <Link className='home' to='/'>
          Northcoders News
        </Link>
        <p>Welcome, {user.name}</p>
      </header>
    )
  }
}

export default Header
