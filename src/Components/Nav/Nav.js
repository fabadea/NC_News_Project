import React from 'react'
import { Link } from '@reach/router'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      {/* <Link className='home' to='/'>
        Home
      </Link> */}

      <Link className='topics' to='/topics'>
        Topics
      </Link>

      <Link className='articles' to='/articles'>
        Articles
      </Link>

      <Link className='users' to='/users'>
        Users
      </Link>
    </nav>
  )
}

export default Nav
