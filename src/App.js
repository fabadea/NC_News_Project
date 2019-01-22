import React, { Component } from 'react'
import './Styles/App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import TopicsDisplay from './Components/TopicDisplay'
import ArticlesDisplay from './Components/ArticlesDisplay'
import { Router } from '@reach/router'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <TopicsDisplay />
        <Router>
          <ArticlesDisplay path='/' />
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
