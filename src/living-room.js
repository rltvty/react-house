import React from 'react'

import { Range } from 'components/range'

const LivingRoom = () => (
  <div>
    <h2>Living Room</h2>
    <Range max='255' url='/lights/controls/PlumLP-LivingRoom' name='PlumLP-LivingRoom' />
  </div>
)

export { LivingRoom }
