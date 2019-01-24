import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'

class ArticlesDisplay extends Component {
  state = {
    articles: [],
    loading: true
  }
  render () {
    const { articles, loading } = this.state
    return (
      <div className='articles'>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          articles.map(({ title }) => (
            <ul key={articles.article_id}>
              <p>{title}</p>
            </ul>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.getArticles()
  }

  getArticles = () => {
    api
      .getArticles()
      .then(articles => {
        this.setState(() => ({
          articles,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default ArticlesDisplay

// import '../Styles/Right.css'
// import { Router } from '@reach/router'
// import Topics from './Topics'
// import Articles from './ArticlesDisplay'
// import Users from './Users'

// import React, { Component } from 'react'

// class Right extends Component {
//   render() {
//     return (
//       <div className='right'>
//         <Router>
//           <Articles path='/' />
//           <Articles path='/articles' />
//           <Topics path='/topics' />
//           <Users path='/users' />
//         </Router>
//       </div>
//     )
//   }
// }

// export default Right
