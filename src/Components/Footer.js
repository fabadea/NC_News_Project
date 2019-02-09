import React from 'react'
import '../Styles/Footer.css'
import { Link } from '@reach/router'

const Footer = () => {
  return (
    <footer>
      <Link className='home' to='/'>
        Northcoders News
      </Link>
      <Link to='/articles/postarticle'>Add new article</Link>
    </footer>
  )
}

export default Footer
