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

// export const fetchArticles = async (topic, options) => {
//   const { isASC, criteria, page } = options
//   const URL = `${API_URL}topics/${topic}/articles?criteria=${criteria}&&p=${page}&&sort_ascending=${isASC}`
//   const { data } = await axios.get(URL)
//   return data
// }

export const fetchArticle = id => {
  return axios
    .get(`${API_URL}/articles/${id}`)
    .then(res => res.data.article[0])
    .catch(console.log)
}

export const getCommentsByArticleId = async articleId =>
  (await axios.get(`${API_URL}/articles/${articleId}/comments?limit=50`)).data
    .comments

// export const fetchArticlesByCriteria = criteria => {
//   return axios
//     .get(`${API_URL}/articles?sort_by=${criteria}`)
//     .then(res => res.data.articles)
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

export const deleteById = (article_id, comment_id, id) => {
  const path = !comment_id
    ? `/articles/${article_id}`
    : `/articles/${id}/comments/${comment_id}`
  axios.delete(`${API_URL}/${path}`)
}

export const fetchTopBy = async () => {
  const URL = `${API_URL}/articles?limit=5&sort_by=comment_count`
  const { data } = await axios.get(URL)
  return data
}

export const postNewTopic = async post => {
  const { data } = await axios.post(`${API_URL}topics`, post)
  return data
}
