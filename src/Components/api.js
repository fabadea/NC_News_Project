import axios from 'axios'

const API_URL = 'https://nc-news-be-flaviu.herokuapp.com/api'

export const fetchArticles = (topic, page = 1) => {
  let path = !topic
    ? `${API_URL}/articles?p=${page}`
    : `${API_URL}/topics/${topic}/articles`

  return axios
    .get(path)
    .then(res => res.data.articles)
    .catch(console.log)
}

export const fetchArticle = id => {
  return axios
    .get(`${API_URL}/articles/${id}`)
    .then(res => res.data.article[0])
    .catch(console.log)
}

export const fetchComments = (id, page = 1) => {
  let path =
    page === 1
      ? `${API_URL}/articles/${id}/comments`
      : `${API_URL}/articles/${id}/comments?p=${page}`

  return axios
    .get(path)
    .then(res => res.data.comments)
    .catch(console.log)
}

export const fetchUsers = () => {
  return axios
    .get(`${API_URL}/users`)
    .then(res => res.data.users)
    .catch(console.log)
}

export const fetchUser = author => {
  return axios
    .get(`${API_URL}/users/${author}`)
    .then(res => res.data.user)
    .catch(console.log)
}

export const fetchTopics = () => {
  return axios
    .get(`${API_URL}/topics`)
    .then(res => res.data.topics)
    .catch(console.log)
}
