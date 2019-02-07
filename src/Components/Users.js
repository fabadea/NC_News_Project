import React, { Component } from 'react'
import { BarLoader } from 'react-css-loaders'
import * as api from './api'
import { Link } from '@reach/router'
import '../Styles/Users.css'

class Users extends Component {
  state = { users: {}, loading: true }
  render () {
    const { users, loading } = this.state

    return (
      <div>
        <div className='title'>All users: </div>
        {loading ? (
          <BarLoader color='grey' />
        ) : (
          users.map(user => (
            <div key={user.username} className='user'>
              <Link to={`/users/${user.username}`}>{user.username}</Link>
            </div>
          ))
        )}
      </div>
    )
  }
  componentDidMount () {
    this.getUser()
  }

  getUser = () => {
    api
      .fetchUsers()
      .then(users => {
        this.setState(() => ({
          users,
          loading: false
        }))
      })
      .catch(err => this.setState({ err, loading: false }))
  }
}

export default Users

// import React, { Component } from 'react';
// import { Router, Link } from '@reach/router';
// import * as api from './api';
// import Votes from './Votes';
// import Error from './Error';
// import Article from './Article';

// class Articles extends Component {
//   state = ({
//     articles: [],
//     err: null,
//     page: 0,
//   })
//   render() {
//     console.log(this.state.page);
//     const { err } = this.state;
//     return (
//       err ? <Error></Error> :
//         <div className="Articles">
//           <div>
//             <ul key="articlesList">
//               {this.state.articles.map((article) => {
//                 return <li key={article.article_id}>
//                   <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
//                   <Votes type='articles' id={article.article_id} votes={article.votes} />
//                 </li>
//               })}
//             </ul>
//           </div>
//           <div>
//             <form onSubmit={this.handleSubmit}>
//               <button onClick={() => { this.handleClick(-1) }} disabled={this.state.page === 0}>Previous page</button>
//               <button onClick={() => { this.handleClick(1) }} disabled={this.state.articles.length === 0}>Next page</button>
//             </form>
//           </div>
//         </div>
//     );
//   }

//   componentDidMount() {
//     this.fetchArticles(this.state.page);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.props.topic !== prevProps.topic) {
//       this.fetchArticles(this.state.page);
//     }
//     if (this.state.page !== prevState.page) {
//       this.fetchArticles(this.state.page);
//     }
//   }

//   fetchArticles = (page) => {
//     api.getArticles(this.props.topic, page)
//       .then((articles) => {
//         this.setState({ articles })
//       })
//       .catch(err => this.setState({ err }))
//   }

//   handleClick = (increment) => {
//     this.setState({ page: this.state.page + increment });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.fetchArticles(this.state.page);
//   }

// }

// export default Articles;
