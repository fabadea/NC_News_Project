import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from '../api'

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  }
  render () {
    const { articles, loading } = this.state
    return (
      <div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          articles.map(article => (
            <li key={article.article_id}>
              <Link to={article.title}>
                {' '}
                <p>{article.title}</p>
              </Link>
            </li>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.getArticles()
  }

  getArticles = () => {
    api
      .getArticles()
      .then(article => {
        this.setState(() => ({
          article,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Articles
