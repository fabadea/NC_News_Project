import React, { Component } from 'react'
import Article from './Article'
import * as api from './api'
import { BarLoader } from 'react-css-loaders'

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  }
  render () {
    const { articles, loading } = this.state
    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <p className='content'>
        {articles.map(article => {
          return <Article key={article.article_id} article={article} />
        })}
      </p>
    )
  }

  componentDidMount () {
    this.getArticles()
  }

  componentDidUpdate = prevProps => {
    if (prevProps !== this.props) {
      this.getArticles()
    }
  }

  getArticles = () => {
    const { topic } = this.props

    if (topic) {
      api
        .fetchArticles(topic)
        .then(articles => this.setState({ articles, loading: false }))
        .catch(err => this.setState({ err, loading: false }))
    } else {
      api
        .fetchArticles()
        .then(articles => this.setState({ articles, loading: false }))
        .catch(err => this.setState({ err, loading: false }))
    }
  }
}

export default Articles
