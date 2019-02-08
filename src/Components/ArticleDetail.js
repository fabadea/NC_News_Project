import React, { Component } from 'react'
import Comments from './Comments'
import { BarLoader } from 'react-css-loaders'
import { Link } from '@reach/router'
import * as api from './api'
import '../Styles/ArticleDetail.css'
import Voter from './Voter'
import Deleter from './Deleter'

class ArticleDetail extends Component {
  state = {
    loading: true,
    article: {}
  }

  render () {
    const {
      article: { article_id, votes, topic, title, body, author },
      loading
    } = this.state
    const { id, user } = this.props
    return loading ? (
      <BarLoader color='grey' />
    ) : (
      <div className='article_info'>
        <h4>{title}</h4>
        <p>{body}</p>
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
        <Voter votes={votes} />
        {user.username === author ? <Deleter article_id={article_id} /> : null}
        <Comments id={id} user={user} />
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
      .catch(console.log)
  }
}

export default ArticleDetail
