import React from 'react'

import { Range } from 'inputs'

const LivingRoom = () => (
  <div className='light'>
    <h2>Living Room</h2>
    <Range url='/lights/controls/PlumLP-LivingRoom' name='PlumLP-LivingRoom' />
  </div>
)

const DiningRoom = () => (
  <div className='light'>
    <h2>Dining Room</h2>
    <Range url='/lights/controls/PlumLP-DiningRoom' name='PlumLP-DiningRoom' />
  </div>
)

const Kitchen = () => (
  <div className='light'>
    <h2>Kitchen</h2>
    <Range url='/lights/controls/PlumLP-Kitchen' name='PlumLP-Kitchen' />
  </div>
)

const Lights = () => (
  <div id='lights'>
    <LivingRoom />
    <DiningRoom />
    <Kitchen />
  </div>
)

export { Lights, LivingRoom, DiningRoom }
