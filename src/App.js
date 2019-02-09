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
import NotFound from './Components/NotFound.js'
import PostArticle from './Components/PostArticle.js'

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
          <Header user={user} />
          <NavBar />
          <Router>
            <Articles path='/' />
            <Articles path='/articles' />
            <Articles path='/topics/:topic' />
            <ArticleDetail path='/articles/:id/*' user={user} />
            <Users path='/users' />
            <User path='/users/:author' />
            <PostArticle user={user} path='/articles/postarticle' />
            <NotFound default />
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
