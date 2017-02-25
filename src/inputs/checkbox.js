import React from 'react'

import { Get, Post } from 'utils/api'
import { Socket } from 'utils/socket'

class Checkbox extends React.Component {
  constructor () {
    super()

    this.state = {
      value: false
    }
  }

  componentDidMount = () => {
    Get(this.props.url)
      .then(res => this.setState({value: res.value}))
  }

  handleMessage = ({name, isPowered}) => {
    if (name !== this.props.name) {
      return
    }

    isPowered && this.setState({value: isPowered})
  }

  handleInput = (e) => {
    let value = e.target.value
    this.setState({value})
    Post(this.props.url, {source: value})
  }

  render () {
    return (
      <div className='checkbox' id={this.props.name}>
        <Socket onMessage={this.handleMessage} />
        <label>
          {this.props.label}
          <input type='checkbox' checked={this.props.value} onChange={this.handleInput} />
        </label>
      </div>
    )
  }
}

export { Checkbox }
