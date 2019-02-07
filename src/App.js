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

class App extends Component {
  state = {
    user: ''
  }
  render () {
    const { user } = this.state
    return (
      <div className='App'>
        {/* <Auth user={user} setUser={this.setUser}> */}
        <Header />
        <NavBar />
        <Router>
          <Articles path='/' />
          <Articles path='/articles' />
          <Articles path='/topics/:topic' />
          <ArticleDetail path='/articles/:id' />
          <Users path='/users' />
          <User path='/users/:author' />
        </Router>
        <Footer />
        {/* </Auth> */}
      </div>
    )
  }
  setUser = username => {
    this.setState({ user: username })
  }
}

export default App

// As a user, I should be able to sort articles by:
//  - date created
//  - comment_count
//  - votes

// As a user, I should be able to login to the site. - not working properly, i think i should use local storage. and i thing i should implement a logout button

// As a logged in user, I should be able to post a new article to an existing topic.
// As a logged in user, I should be able to post a new article to a new topic.
// As a logged in user, I should be able to post a new comment to an existing article.

// As a logged in user, I should be able to delete my own articles.
// As a logged in user, I should be able to delete my own comments.

// error handler
