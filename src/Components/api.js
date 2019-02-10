import axios from 'axios'

const API_URL = 'https://nc-news-be-flaviu.herokuapp.com/api'

export const fetchArticles = (topic, page = 1) => {
  let path = !topic
    ? `${API_URL}/articles?p=${page}`
    : `${API_URL}/topics/${topic}/articles?p=${page}`

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

export const fetchComments = async id => {
  const res = await axios.get(`${API_URL}/articles/${id}/comments`)
  return res.data.comments
}

// export const fetchComments = (id, page) => {
//   let path =
//     page === 1
//       ? `${API_URL}/articles/${id}/comments`
//       : `${API_URL}/articles/${id}/comments?p=${page}`

//   return axios
//     .get(path)
//     .then(res => res.data.comments)
//     .catch(console.log)
// }

// export const fetchComments = id => {
//   return axios
//     .get(`${API_URL}/articles/${id}/comments?limit=999999`)
//     .then(res => res.data.comments)
//     .catch(console.log)
// }

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

export const patchVotes = (article_id, comment_id, id, value) => {
  const path = !comment_id
    ? `/articles/${article_id}`
    : `/articles/${id}/comments/${comment_id}`
  return axios
    .patch(`${API_URL}${path}`, { inc_votes: value })
    .then(res => res.data.votes)
    .catch(console.log)
}

export const deleteById = (article_id, comment_id) => {
  const path = !comment_id
    ? `/articles/${article_id}`
    : `/articles/${article_id}/comments/${comment_id}`
  axios.delete(`${API_URL}/${path}`)
}
