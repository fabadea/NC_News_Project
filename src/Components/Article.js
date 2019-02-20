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
      <Link
        to={`/articles/${article_id}`}
        style={{ textDecoration: 'none', margin: '0.3vh' }}
      >
        <div className='article_card'>
          <div className='article_title'>{title.toLowerCase()}</div>
          <div className='card_data'>
            <p>by {author}</p>
            <p> {` ,comments: ${comment_count} votes: ${votes}`}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default Article
