import React, { Component } from 'react'
import * as api from './api'
import { Link } from '@reach/router'
import '../Styles/TopArticles.css'

class TopArticles extends Component {
  state = {
    top5: []
  }
  render () {
    const { top5 } = this.state
    return (
      <div>
        <div className='titlepopular'>popular articles</div>
        <div className='containerUl'>
          <ul className='top'>
            {top5.map((article, no) => (
              <div key={no} className='containerLi'>
                <div className='itemNumberCont'>
                  <div className='itemNumber'>{no + 1}</div>
                </div>
                <div className='itemTitle'>
                  <li className='topLi'>
                    <Link
                      to={`/articles/${article.article_id}`}
                      style={{ textDecoration: 'none', color: '#35424a' }}
                    >
                      {article.title}
                    </Link>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  componentDidMount () {
    api.fetchTopBy().then(response => {
      this.setState({ top5: response.articles })
    })
  }
}

export default TopArticles
