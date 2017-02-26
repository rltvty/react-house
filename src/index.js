import React from 'react'
import ReactDOM from 'react-dom'

import { LivingRoom } from './living_room'

import 'normalize.css'
import './index.css'

const App = () => (
  <div id='app'>
    <LivingRoom />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
