import '../Styles/Footer.css'
import { Router } from '@reach/router'
import { Link } from '@reach/router'
import React, { Component } from 'react'
import * as api from './api'
import Article from './Article'

class Footer extends Component {
  state = {
    criteria: '',
    article: []
  }
  render () {
    const { user } = this.props
    const { article } = this.state
    return (
      <footer>
        <label>
          Hi, {user.name}! Find some revevant articles here.
          <br />
          Sort Articles:
          <Link to={`/`}>
            <select onChange={this.assignCriteria}>
              <option selected disabled>
                Choose criteria
              </option>
              <option value='title'>Title</option>
              <option value='created_at'>Date created</option>
              <option value='comment_count'>Most Commented</option>
              <option value='votes'>Most Popular</option>
            </select>
            <Router>
              {article.map(article => {
                return (
                  <Article
                    path='articles/sorted'
                    key={article.article_id}
                    article={article}
                  />
                )
              })}
            </Router>
          </Link>
        </label>
        <p>Want to say somenthing? </p>
        <Link to='/articles/postarticle'>
          <button> Write an article here</button>
        </Link>
      </footer>
    )
  }
  assignCriteria = e => {
    this.setState(
      {
        criteria: e.target.value
      },
      () => this.sortedArticles()
    )
  }

  sortedArticles = () => {
    const { criteria } = this.state
    api
      .fetchArticlesByCriteria(criteria)
      .then(article => this.setState({ article }))
      .catch(console.log)
  }
}

export default Footer
