import React, { Component } from 'react'
// import { Router } from '@reach/router'
import './App.css'

import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Left from './Components/Left/Left'
import Right from './Components/Right/Right'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Nav />
        <Left />
        <Right />
        <Footer />
      </div>
    )
  }
}

export default App
