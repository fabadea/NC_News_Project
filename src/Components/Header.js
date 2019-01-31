import React from 'react'
import '../Styles/Header.css'
import { Link } from '@reach/router'

const Header = () => {
  return (
    <header>
      <Link className='home' to='/'>
        Northcoders News
      </Link>
    </header>
  )
}

export default Header
