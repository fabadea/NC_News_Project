import React, { Component } from 'react'
import * as api from './api'

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
          {`the number of votes is now: ${votes + voteChange} votes.`}
          <br />
          {`> Like it?`}
        </p>
        <button onClick={() => this.updateVote(1)} disabled={voteChange > 0}>
          Vote Up
        </button>

        <button onClick={() => this.updateVote(-1)} disabled={voteChange < 0}>
          Vote Down
        </button>
      </section>
    )
  }

  updateVote = value => {
    const { article_id, comment_id } = this.props
    api.patchVotes(article_id, comment_id, value)
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + value
    }))
  }
}

export default Voter
