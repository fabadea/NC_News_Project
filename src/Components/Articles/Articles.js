import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
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
          articles.map(({ title }) => (
            <ul key={articles.article_id}>
              <p>{title}</p>
            </ul>
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
      .then(articles => {
        this.setState(() => ({
          articles,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Articles
