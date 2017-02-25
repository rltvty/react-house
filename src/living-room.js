import React from 'react'

import { Post } from 'utils/api'
import { Socket } from 'utils/socket'

class LivingRoom extends React.Component {
  constructor () {
    super()

    this.state = {
      data: null,
      level: 0
    }
  }

  handleMessage = (data) => {
    if (data.name === 'PlumLP-LivingRoom' && data.level !== undefined) {
      this.setState({data: data, level: data.level})
    }
  }

  handleInput = (e) => {
    let level = e.target.value
    this.setState({level})

  }

  setLevel = () => {
    Post(`/lights/controls/PlumLP-LivingRoom`, {level: this.state.level})
  }

  render () {
    return (
      <div>
        <Socket url='' onMessage={this.handleMessage} />
        <h2>Living Room</h2>
        <input type='range' min='0' max='255' onChange={this.handleInput} onMouseUp={this.setLevel} value={this.state.level} />
      </div>
    )
  }
}

export { LivingRoom }
