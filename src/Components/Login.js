// import React, { Component } from 'react'
// import Users from './Users'

// class Login extends Component {
//   state = {
//     username: ''
//   }
//   render () {
//     return (
//       <div className='usercontent'>
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type='text'
//             placeholder='Type your username here'
//             onChange={this.handleChange}
//           />
//           <button className='buttonnext'>Submit</button>
//         </form>
//         <Users path='/users' />
//       </div>
//     )
//   }
//   handleChange = event => {
//     const { value } = event.target
//     this.setState({ username: value })
//   }
//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.setUser(this.state.username)
//   }
// }

// export default Login
