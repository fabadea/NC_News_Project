import React, { Component } from 'react'
import Article from './Article'
import * as api from './api'
import { BarLoader } from 'react-css-loaders'
import '../Styles/Buttons.css'

class Articles extends Component {
  state = {
    articles: [],
    loading: true,
    page: 1
  }
  render () {
    const { articles, loading, page } = this.state

    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div>
        <p className='content'>
          {articles.map(article => {
            return <Article key={article.article_id} article={article} />
          })}
        </p>

        <form onSubmit={this.handleSubmit}>
          <button
            className='buttonback'
            onClick={() => {
              this.handleClick(-1)
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className='buttonnext'
            onClick={() => {
              this.handleClick(1)
            }}
            disabled={articles.length === 0}
          >
            More
          </button>
        </form>
      </div>
    )
  }

  componentDidMount () {
    const { page } = this.state
    this.getArticles(page)
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { topic } = this.props
    const { page } = this.state
    if (topic !== prevProps.topic) {
      this.getArticles(page)
    }
    if (page !== prevState.page) {
      this.getArticles(page)
    }
  }

  getArticles = page => {
    const { topic } = this.props
    api
      .fetchArticles(topic, page)
      .then(articles => {
        this.setState({ articles, loading: false })
      })
      .catch(err => this.setState({ err }))
  }

  handleClick = increment => {
    const { page } = this.state
    console.log(page)

    this.setState({ page: page + increment })
  }

  handleSubmit = event => {
    const { page } = this.state
    event.preventDefault()
    this.getArticles(page)
  }
}

export default Articles
