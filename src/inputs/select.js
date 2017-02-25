import React from 'react'

import { Get, Post } from 'utils/api'
import { Socket } from 'utils/socket'

class Select extends React.Component {
  constructor () {
    super()

    this.state = {
      value: 0,
      options: []
    }
  }

  componentDidMount = () => {
    Get(this.props.url)
      .then(res => this.setState({value: res.source}))

    Get(this.props.optionsUrl)
      .then(res => this.setState({options: res}))
  }

  handleMessage = ({name, source}) => {
    if (name !== this.props.name) {
      return
    }

    source && this.setState({value: source})
  }

  handleInput = (e) => {
    let value = e.target.value
    this.setState({value})
    Post(this.props.url, {source: value})
  }

  render () {
    return (
      <div className='select' id={this.props.name}>
        <Socket onMessage={this.handleMessage} />
        <select value={this.state.value} onChange={this.handleInput}>
          {this.state.options.map((option, i) => {
            return <option value={option} key={i}>{option}</option>
          })}
        </select>
      </div>
    )
  }
}

export { Select }
