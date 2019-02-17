import React, { Component } from 'react'
import Head from './Components/Head'
import Auth from './Components/Auth'
import Users from './Components/Users'
import User from './Components/User'
import Topics from './Components/Topics'
import Articles from './Components/Articles'
import Right from './Components/Right'
import ArticleDetail from './Components/ArticleDetail'
import PostArticle from './Components/PostArticle'
import NotFound from './Components/NotFound'
import axios from 'axios'
import { Router } from '@reach/router'
import { Link } from '@reach/router'
import '../src/Styles/App.css'
import {
  Container,
  Header,
  Body,
  Content,
  Aside,
  Footer
} from 'react-holy-grail-layout'

class App extends Component {
  state = {
    user: {},
    users: []
  }
  render () {
    const { user, users } = this.state
    console.log(user)

    return (
      <Auth users={users} login={this.login} user={user}>
        <Container>
          <Header>
            <Head user={user} handleLogOut={this.handleLogOut} />
          </Header>
          <Body>
            <Content style={{ backgroundColor: 'rgba(53, 66, 74, 0.2)' }}>
              <Router>
                <Articles path='/' />
                <Articles path='/articles' />
                <Articles path='/topics/:topic' />
                <PostArticle path='/postarticle' user={user} />
                <ArticleDetail path='/articles/:id' user={user} />
                <Users path='/users' />
                <User path='/users/:author' />
                <NotFound default />
              </Router>
            </Content>
            <Aside
              style={{ backgroundColor: 'rgba(53, 66, 74, 0.4)' }}
              left
              primary
              p={2}
            >
              <Topics />
            </Aside>
            <Aside
              style={{ backgroundColor: 'rgba(53, 66, 74, 0.4)' }}
              right
              p={2}
            >
              <Right />
            </Aside>
          </Body>
          <Footer bg='rgba(53, 66, 74, 0.4)' p={2}>
            {/* <Foot /> */}
          </Footer>
        </Container>
      </Auth>
    )
  }

  componentDidMount () {
    if (localStorage.getItem('user')) {
      this.setState({ user: JSON.parse(localStorage.getItem('user')) })
    }
    this.getTopics()
  }
  // setUser = username => {
  //   const user = this.state.users.find(user => user.username === username)
  //   if (user) this.setState({ user })
  // }

  handleLogOut = () => {
    this.setState({ user: {} }, () => {
      localStorage.removeItem('user')
    })
  }

  getTopics = () => {
    axios
      .get(`https://nc-news-be-flaviu.herokuapp.com/api/topics`)
      .then(({ data }) => {
        this.setState({ topics: data.topics })
      })
  }

  login = ({ user }) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export default App
