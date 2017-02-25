import React from 'react'

import { Get, Post } from 'utils/api'
import { Socket } from 'utils/socket'

class Range extends React.Component {
  constructor () {
    super()

    this.state = {
      value: 0
    }
  }

  componentDidMount = () => {
    Get(this.props.url)
      .then(res => this.setState({value: res.level}))
  }

  handleMessage = ({name, level, volume}) => {
    if (name !== this.props.name) {
      return
    }

    level && this.setState({value: level})
    volume && this.setState({value: volume})
  }

  handleInput = (e) => {
    let value = e.target.value
    this.setState({value})
  }

  setValue = () => {
    Post(this.props.url, {level: this.state.value})
  }

  render () {
    return (
      <div className='range' id={this.props.name}>
        <Socket onMessage={this.handleMessage} />
        <input type='range' min='0' max={this.props.max || 255} onChange={this.handleInput} onMouseUp={this.setValue} value={this.state.value} />
      </div>
    )
  }
}

export { Range }