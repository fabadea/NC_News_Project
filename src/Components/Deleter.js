// import React, { Component } from 'react'
// import * as api from './api'
// import { navigate } from '@reach/router'

// class Deleter extends Component {
//   render () {
//     const { article_id, comment_id } = this.props
//     return !comment_id ? (
//       <button onClick={() => this.deleter(article_id)}>delete</button>
//     ) : (
//       <button onClick={() => this.deleter(comment_id)}>delete</button>
//     )
//   }

//   deleter = () => {
//     const { article_id, comment_id, id, getComment, getArticle } = this.props
//     console.log(getArticle)
//     if (comment_id) {
//       console.log(comment_id)
//       console.log(id)

//       api
//         .deleteById(article_id, comment_id, id)
//         .then(() => getComment)
//         .catch(console.log)
//     } else {
//       api
//         .deleteById(article_id, comment_id, id)
//         .then(() => getArticle)
//         .catch(console.log)
//     }
//   }
// }

// export default Deleter
