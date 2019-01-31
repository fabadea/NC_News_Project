import React, { Component } from 'react'
import Comments from './Comments'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from './api'
import '../Styles/ArticleDetail.css'

class ArticleDetail extends Component {
  state = {
    loading: true,
    article: {}
  }

  render () {
    const {
      article: { votes, topic, title, body, author },
      loading
    } = this.state

    const { id } = this.props

    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div className='article_info'>
        <h4>{title}</h4>
        <p>{body}</p>
        <p>{`this article has ${votes} votes`}</p>
        <Link to={`/users/${author}`}>
          <p className='article_user'>
            {`author: ${author}`}
            <br /> {`> see user's details`}
          </p>
        </Link>
        <Link to={`/topics/${topic}`}>
          <p className='article_user'>
            {`topic: ${topic}`} <br /> {`> see other articles for this topic`}
          </p>
        </Link>
        <Comments id={id} />
      </div>
    )
  }

  componentDidMount = () => {
    this.getArticle()
  }

  getArticle = () => {
    const { id } = this.props
    api
      .fetchArticle(id)
      .then(article => this.setState({ article, loading: false }))
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default ArticleDetail
