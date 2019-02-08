import React, { Component } from 'react'
import './App.css'
import Auth from './Components/Auth.js'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import Articles from './Components/Articles.js'
import ArticleDetail from './Components/ArticleDetail.js'
import User from './Components/User.js'
import Users from './Components/Users.js'
import NavBar from './Components/NavBar.js'
import { Router } from '@reach/router'
import * as api from './Components/api'

class App extends Component {
  state = {
    user: '',
    users: []
  }
  render () {
    const { user, users } = this.state
    return (
      <div className='App'>
        <Auth users={users} setUser={this.setUser} user={user}>
          <Header />
          <NavBar user={user} />
          <Router>
            <Articles path='/' />
            <Articles path='/articles' />
            <Articles path='/topics/:topic' />
            <ArticleDetail path='/articles/:id' user={user} />
            <Users path='/users' />
            <User path='/users/:author' />
          </Router>
          <Footer />
        </Auth>
      </div>
    )
  }
  componentDidMount () {
    api.fetchUsers().then(users => {
      this.setState({ users })
    })
  }
  setUser = username => {
    const user = this.state.users.find(user => user.username === username)
    if (user) this.setState({ user })
  }
}

export default App

// As a user, I should be able to sort articles by:
//  - date created
//  - comment_count
//  - votes
// don't have it, I should fetch articles and ad a query on the link should be `....articles?sort_by${value here}` and the value should be given from user, from a list. it will be done by weekend

// As a logged in user, I should be able to post a new article to an existing topic.
// As a logged in user, I should be able to post a new article to a new topic.
// As a logged in user, I should be able to post a new comment to an existing article.
// don't have it, it will be done by weekend

// As a logged in user, I should be able to delete my own articles. - not working properly, delete the article/comment from BE but not from FE. I can't figure out at this moment how to make a single reusable function, I should setState for both comments and articles and render after delete
// As a logged in user, I should be able to delete my own comments.- same

// error handler - don't have any
