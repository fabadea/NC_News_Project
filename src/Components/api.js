import axios from 'axios'

const API_URL = 'https://nc-news-be-flaviu.herokuapp.com/api'

export const getTopics = async () => {
  const { data } = await axios.get(`${API_URL}/topics`)
  return data.topics
}

export const getArticles = async () => {
  const { data } = await axios.get(`${API_URL}/articles`)
  return data.articles
}

export const getUsers = async () => {
  const { data } = await axios.get(`${API_URL}/users`)
  return data.users
}
