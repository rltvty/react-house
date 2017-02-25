import React from 'react'

import { Range } from 'components/range'

const Volume = () => (
  <div className='light'>
    <h2>Volume</h2>
    <Range url='/audio/zone/main/volume' name='Audio-main' max='98' />
  </div>
)

const Audio = () => (
  <div id='audio'>
    <Volume />
  </div>
)

export { Audio, Volume }
