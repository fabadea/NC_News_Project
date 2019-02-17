import React, { Component } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import * as api from './api'
import '../Styles/Topics.css'

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
      <div className='postArticle_container'>
        <form onSubmit={this.postNewArticle}>
          <div className='row'>
            <div className='col-25'>
              <label>Topic</label>
            </div>
            <div className='col-75'>
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
            </div>
          </div>

          <div className='row'>
            <div className='col-25'>
              <label>Title</label>
            </div>
            <div class='col-75'>
              <input
                placeholder='title'
                type='text'
                onChange={this.handleChange}
                value={newArticleTitle}
                id={'newArticleTitle'}
              />
            </div>
          </div>

          <div className='row'>
            <div className='col-25'>
              <label>Body</label>
            </div>

            <div class='col-75'>
              <textarea
                placeholder='article body'
                type='text'
                onChange={this.handleChange}
                value={newArticleBody}
                id={'newArticleBody'}
              />
              <button type='submit' className='button_topic_art'>
                submit
              </button>
            </div>
          </div>
        </form>
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
