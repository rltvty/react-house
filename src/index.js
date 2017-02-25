import React from 'react'
import ReactDOM from 'react-dom'

import { Audio } from './audio'
import { Lights } from './lights'

import 'normalize.css'
import './index.css'

const App = () => (
  <div id='app'>
    <Lights />
    <Audio />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
