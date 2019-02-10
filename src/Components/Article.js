import React, { Component } from 'react'
import '../Styles/Article.css'
import { Link } from '@reach/router'

class Article extends Component {
  render () {
    const {
      article_id,
      title,
      author,
      comment_count,
      votes
    } = this.props.article
    return (
      <Link to={`/articles/${article_id}`} style={{ textDecoration: 'none' }}>
        <div className='articleCard'>
          <div>{title.toLowerCase()}</div>
          <div className='cardData'>
            <p>by {author}</p>
            <p>{`comments: ${comment_count} votes: ${votes}`}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Article
