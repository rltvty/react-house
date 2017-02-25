import React from 'react'

import { Range, Select } from 'inputs'

const LivingRoom = () => (
  <div className='light'>
    <h2>Living Room</h2>
    <Select url='/audio/zone/main/source' optionsUrl='/audio/sources' name='Audio-main' />
    <Range url='/audio/zone/main/volume' name='Audio-main' max='98' />
  </div>
)

const Audio = () => (
  <div id='audio'>
    <LivingRoom />
  </div>
)

export { Audio, LivingRoom }
