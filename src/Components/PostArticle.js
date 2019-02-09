import React, { Component } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import * as api from './api'

class PostArticle extends Component {
  state = {
    topics: [],
    selectedTopic: '',
    newArticleTitle: '',
    newArticleBody: ''
  }

  render () {
    const { topics, newArticleBody, newArticleTitle } = this.state
    return (
      <div key={'newArticlePage'}>
        <h4>You can post a new article here</h4>
        <div key={'addNewArticle'}>
          <label>Chose topic:</label>
          <br />
          <select onChange={this.topicChange}>
            <option selected disabled>
              topic
            </option>
            {topics &&
              topics.map(topic => {
                return (
                  <option key={topic.slug} value={topic.slug}>
                    {topic.slug}
                  </option>
                )
              })}
          </select>

          <form className='content' onSubmit={this.postNewArticle}>
            <input
              placeholder='title'
              type='text'
              onChange={this.handleChange}
              value={newArticleTitle}
              id={'newArticleTitle'}
            />
            <input
              placeholder='article body'
              type='text'
              onChange={this.handleChange}
              value={newArticleBody}
              id={'newArticleBody'}
            />
            <button type='submit' className='buttonnext'>
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }

  handleChange = event => {
    const key = event.target.id
    const input = event.target.value
    this.setState({
      [key]: input
    })
  }

  topicChange = e => {
    const topicChosen = e.target.value
    this.setState({
      selectedTopic: topicChosen
    })
  }

  postNewArticle = e => {
    e.preventDefault()
    const { newArticleBody, newArticleTitle, selectedTopic } = this.state
    const username = this.props.user.username
    const body = { body: newArticleBody, title: newArticleTitle, username }
    if (!newArticleBody || !newArticleTitle || !selectedTopic) {
      alert(
        'Please be sure that your article is asigned to a topic, have a title and a body'
      )
    } else {
      axios
        .post(
          `https://nc-news-be-flaviu.herokuapp.com/api/topics/${selectedTopic}/articles`,
          body
        )
        .then(() => navigate('/articles'))
        .catch(console.log)
    }
  }

  componentDidMount () {
    this.getTopics()
  }

  getTopics = () => {
    api
      .fetchTopics()
      .then(topics => {
        this.setState(() => ({
          topics
        }))
      })
      .catch(console.log)
  }
}

export default PostArticle
