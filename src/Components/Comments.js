// import React, { Component } from 'react'
// import Comment from './Comment'
// import * as api from './api'

// class Comments extends Component {
//   state = {
//     comments: []
//   }

//   render () {
//     const { id, user } = this.props
//     const { comments, page } = this.state
//     return (
//       <div>
//         <h4>Comments: </h4>
//         {comments.map(comment => {
//           return (
//             <Comment
//               key={comment.comment_id}
//               comment={comment}
//               id={id}
//               user={user}
//               deleteComment={this.deleteComment}
//             />
//           )
//         })}
//         {/* <form onSubmit={this.handleSubmit}>
//           <button
//             className='buttonback'
//             onClick={() => {
//               this.handleClick(-1)
//             }}
//             disabled={page === 1}
//           >
//             Previous
//           </button>
//           <button
//             className='buttonnext'
//             onClick={() => {
//               this.handleClick(1)
//             }}
//             disabled={comments.length < 10}
//           >
//             More
//           </button>
//         </form> */}
//       </div>
//     )
//   }

//   componentDidMount = () => {
//     this.getComments()
//   }

//   getComments = () => {
//     const { id } = this.props
//     api
//       .fetchComments(id)
//       .then(comments => this.setState({ comments }))
//       .catch(console.log)
//   }

//   deleteComment = idDeletedComment => {
//     this.setState(prevState => ({
//       comments: prevState.comments.filter(
//         ({ comment_id }) => comment_id !== idDeletedComment
//       )
//     }))
//   }
// }

// export default Comments

import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import '../App.css'
import { getCommentsByArticleId, postCommentByArticle } from './api'
import Comment from './Comment'

class Comments extends Component {
  state = {
    comments: []
  }

  render () {
    const { comments } = this.state
    const { id, user } = this.props
    return (
      <div>
        <h4>Comments: </h4>

        {comments.map(comment => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            id={id}
            user={user}
          />
        ))}
      </div>
    )
  }

  async componentDidMount () {
    const comments = await getCommentsByArticleId(this.props.id)
    this.setState({ comments })
  }
}

export default Comments
