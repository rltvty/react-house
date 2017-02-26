import React from 'react'

class Socket extends React.Component {
  constructor () {
    super()
    this.__socket = null
  }

  componentDidMount () {
    this.__socket = new WebSocket('ws://localhost:3000/', 'event-stream')
    this.__socket.addEventListener('message', this.handleMessage)
  }

  componentWillUnmount () {
    this.__socket.close()
  }

  handleMessage = ({data}) => {
    this.props.onMessage(JSON.parse(data))
  }

  render () {
    return null
  }
}

export { Socket }
