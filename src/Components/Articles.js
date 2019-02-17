import React, { Component } from 'react'
import Article from './Article'
import * as api from './api'
import { BarLoader } from 'react-css-loaders'
import '../Styles/Buttons.css'
import axios from 'axios'

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
        <div className='content'>
          <label>
            Sort by:
            <select onChange={this.assignSortBy}>
              <option key={'disabled'} value={null} defaultValue disabled>
                Choose sort criteria
              </option>
              <option value='created_at'>Date created</option>
              <option value='comment_count'>Comment count</option>
              <option value='votes'>Votes</option>
            </select>
          </label>
          {articles.map(article => {
            return (
              <Article
                key={article.article_id}
                article={article}
                className='article_card'
              />
            )
          })}
        </div>
        <form className='buttons' onSubmit={this.handleSubmit}>
          <button
            className='button'
            onClick={() => {
              this.handleClick(-1)
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className='button'
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
      .then(articles => this.setState({ articles, loading: false }))
      .catch(console.log)
  }

  handleClick = increment => {
    const { page } = this.state
    this.setState({ page: page + increment })
  }

  handleSubmit = event => {
    const { page } = this.state
    event.preventDefault()
    this.getArticles(page)
  }
  assignSortBy = e => {
    this.setState(
      {
        criteria: e.target.value
      },
      () => this.sortArticles()
    )
  }

  sortArticles = () => {
    const { criteria } = this.state
    let url = `https://nc-news-be-flaviu.herokuapp.com/api/articles?sort_by=${criteria}`

    axios.get(url).then(({ data }) => {
      this.setState({
        articles: data.articles
      })
    })
  }
}

export default Articles
