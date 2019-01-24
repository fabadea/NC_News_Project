import React, { Component } from 'react'
import './Styles/App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import TopicsDisplay from './Components/TopicDisplay'
import ArticlesDisplay from './Components/ArticlesDisplay'
import Users from './Components/Users'
import User from './Components/User'

import { Router } from '@reach/router'

class App extends Component {
  render () {
    return (
      <div className='col-1'>
        <Header />
        <Nav />
        <div className='content'>
          <aside>
            <TopicsDisplay />
          </aside>
          <article>
            <Router>
              <ArticlesDisplay path='/' />
              <ArticlesDisplay path='/topics/:topic/articles' />
              <Users path='/users' />
              <User path='/users/:username' />
            </Router>
          </article>
        </div>
        <Footer />
      </div>
    )
  }

  componentDidMount () {
    this.getUser()
  }

  saveUser = () => {
    const user = this.state.user
    localStorage.setItem('user', JSON.stringify(user))
  }

  getUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    this.setState({ user })
  }
}

export default App
