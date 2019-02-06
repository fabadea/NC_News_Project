import React, { Component } from 'react'
import '../Styles/Article.css'
import { Link } from '@reach/router'
import throttle from 'lodash.throttle'

class Article extends Component {
  render () {
    const {
      article_id,
      title,
      author,
      comment_count,
      votes
    } = this.props.article
    console.log(this.props.article)
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
  componentDidMount = () => {
    window.onscroll = () => {
      this.throttleScroll()
    }
  }

  // componentDidUpdate = (prevProps, prevState) => {}

  handleScroll = () => {
    const scrolledHeight = window.innerHeight + window.scrollY
    const bottom = document.body.scrollHeight - 100
    if (scrolledHeight >= bottom) {
      console.log('here')
      // call fetch articles
    }
  }

  throttleScroll = throttle(this.handleScroll, 1000)
}

export default Article
