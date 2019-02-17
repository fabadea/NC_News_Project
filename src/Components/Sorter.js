import React, { Component } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'

class Sorter extends Component {
  state = { criteria: '', articles: [] }
  render () {
    const { articles } = this.state
    console.log(articles)

    return (
      <div>
        <Link to='/articles'>
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
        </Link>
      </div>
    )
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

export default Sorter
