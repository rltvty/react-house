import React from 'react'

import { Post } from 'utils/api'
import { Socket } from 'utils/socket'

class Range extends React.Component {
  constructor () {
    super()

    this.state = {
      data: null,
      level: 0
    }
  }

  handleMessage = (data) => {
    if (data.name === this.props.name && data.level !== undefined) {
      this.setState({data: data, level: data.level})
    }
  }

  handleInput = (e) => {
    let level = e.target.value
    this.setState({level})
  }

  setLevel = () => {
    Post(this.props.url, {level: this.state.level})
  }

  render () {
    return (
      <div>
        <Socket onMessage={this.handleMessage} />
        <input type='range' min='0' max={this.props.max} onChange={this.handleInput} onMouseUp={this.setLevel} value={this.state.level} />
      </div>
    )
  }
}

export { Range }
