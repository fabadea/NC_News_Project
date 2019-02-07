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
        <Auth user={user} setUser={this.setUser}>
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
        </Auth>
      </div>
    )
  }
  setUser = username => {
    this.setState({ user: username })
  }
}

export default App
