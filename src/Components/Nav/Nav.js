import React from 'react'
import { Link } from '@reach/router'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      <Link to='/'>Home </Link>
      {' | '}
      <Link to='/topics'>Topics </Link>
      {' | '}
      <Link to='/articles'>Articles</Link>
    </nav>
  )
}

export default Nav
