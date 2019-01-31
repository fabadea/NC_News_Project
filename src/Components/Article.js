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
          <p>{title.toLowerCase()}</p>
          <div className='cardData'>
            <div>by {author}</div>
            <p>{`commments: ${comment_count} votes: ${votes}`}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Article
