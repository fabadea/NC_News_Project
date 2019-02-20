import React, { Component } from 'react'
import * as api from './api'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/lib/fa'
import '../Styles/Voter.css'

class Voter extends Component {
  state = {
    voteChange: 0
  }

  render () {
    const { voteChange } = this.state
    const { votes } = this.props

    return (
      <section className='vote'>
        <p>
          {`the number of likes is now: ${votes + voteChange} votes.`}
          <br />
          {`> Like it?`}
        </p>
        <div className='votebutton_parent'>
          <button
            className='votebutton'
            onClick={() => this.updateVote(1)}
            disabled={voteChange > 0}
          >
            Yes{'  '}
            <FaThumbsUp
              style={{ fontSize: '3vh', color: 'rgb(102, 120, 255)' }}
            />
          </button>

          <button
            className='votebutton'
            onClick={() => this.updateVote(-1)}
            disabled={voteChange < 0}
          >
            No{'  '}
            <FaThumbsDown
              style={{ fontSize: '3vh', color: 'rgb(223, 117, 250)' }}
            />
          </button>
        </div>
      </section>
    )
  }

  updateVote = value => {
    const { article_id, comment_id, id } = this.props
    api.patchVotes(article_id, comment_id, id, value)
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + value
    }))
  }
}

export default Voter
