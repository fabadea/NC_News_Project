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
          {`the number of likes is now: ${votes + voteChange} votes.`}
          <br />
          {`> Like it?`}
        </p>
        <button onClick={() => this.updateVote(1)} disabled={voteChange > 0}>
          Yes, I do
        </button>

        <button onClick={() => this.updateVote(-1)} disabled={voteChange < 0}>
          Nope
        </button>
      </section>
    )
  }

  updateVote = value => {
    const { article_id, comment_id, id } = this.props
    console.log(comment_id)
    api.patchVotes(article_id, comment_id, id, value)
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + value
    }))
  }
}

export default Voter
