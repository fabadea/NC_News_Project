import React from 'react'
import '../Styles/Head.css'
import { Link } from '@reach/router'

const Head = props => {
  const { handleLogOut, user } = props
  return (
    <header>
      <Link className='home' to='/'>
        Northcoders News
      </Link>

      <div className='header_utils'>
        <Link className='header_button' to='/users'>
          Users
        </Link>
        <Link className='header_button' to='/'>
          Articles
        </Link>
        <div className='username'>
          <div className='userDetails'>
            <div className='user_name'>Welcome:</div>
            <p>{user.username}</p>
          </div>
          <Link className='logout' to='/' onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Head
