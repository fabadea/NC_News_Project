import React, { Component } from 'react'
import { Link } from '@reach/router'
import TopArticles from './TopArticles'

class Right extends Component {
  render () {
    return (
      <div className='sideBarContainer'>
        <div className='linkContainer'>
          <Link
            to='/postarticle'
            style={{ textDecoration: 'none', color: 'black', width: '100%' }}
          >
            <div className='button'>New Article</div>
          </Link>
        </div>

        <TopArticles />
      </div>
    )
  }
}

export default Right
