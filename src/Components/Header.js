import React from 'react'
import '../Styles/Header.css'
import { Link } from '@reach/router'

const Header = () => {
  return (
    <div className='header'>
      <Link className='home' to='/'>
        Northcoders News
      </Link>
    </div>
  )
}

export default Header
