import React from 'react'

import { Socket } from 'utils/socket'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      data: null
    }
  }

  handleMessage = (data) => {
    this.setState({data})
  }

  render () {
    return (
      <div>
        <Socket url='' onMessage={this.handleMessage} />
        <h2>REACT HOUSE</h2>
        <span>{JSON.stringify(this.state.data)}</span>
      </div>
    )
  }
}

export { App }
