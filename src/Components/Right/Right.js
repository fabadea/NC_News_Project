import './Right.css'
import { Router } from '@reach/router'
import Topics from '../Topics/Topics'
import Articles from '../Articles/Articles'
import Users from '../Users/Users'

import React, { Component } from 'react'

class Right extends Component {
  render () {
    return (
      <Router className='Right'>
        <Topics path='/topics' />
        <Articles path='/articles' />
        <Users path='/users' />
      </Router>
    )
  }
}

export default Right
