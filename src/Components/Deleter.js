import React, { Component } from 'react'
import * as api from './api'

class Deleter extends Component {
  // state = {
  //   comments: [],
  //   articles: [],
  // }
  render () {
    const { id, comment_id } = this.props

    return !comment_id ? (
      <button onClick={() => this.deleter(id)}>delete</button>
    ) : (
      <button onClick={() => this.deleter(comment_id)}>delete</button>
    )
  }

  deleter = () => {
    const { id, comment_id } = this.props
    api.deleteById(id, comment_id)
  }
}
//   componentDidUpdate (prevProps) {
//     if (prevProps.id !== this.props.id) {
//       api.fetchComments(this.props.id).then(response => {
//         this.setState({ comments: response.body })
//       })
//     }
//   }

//   deleter = () => {
//     const { id, comment_id } = this.props
//     api.deleteById(id, comment_id).then(
//       !comment_id
//         ? this.setState(prevState => ({
//           articles: return just the articles where id !== article_id
//         }))
//         : this.setState(prevState => ({
//           comments: return just the articles where id !== article_id
//           )
//         }))
//     )
//   }
// }

// // is doing the job in BE but not in FO

export default Deleter
