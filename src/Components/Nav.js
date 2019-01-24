import React from 'react'
import { Link } from '@reach/router'
import '../Styles/App.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <Link className='topics' to='/topics'>
        Topics
      </Link>

      <Link className='users-button' to='/users'>
        Users
      </Link>
    </nav>
  )
}

export default Nav
