import React from 'react'

import { Button, Checkbox, Range, Select } from 'inputs'

const LivingRoom = () => (
    <div className='room'>
        <h2>Living Room</h2>
        <div className="audio">
            <h3>Audio</h3>
            <Select url='/audio/zone/main/source' optionsUrl='/audio/sources' name='Audio-main' />
            <Range url='/audio/zone/main/volume' name='Audio-main' max='98' />
        </div>
        <h3>Lights</h3>
        <div className="light">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-LivingRoom' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-LivingRoom' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-LivingRoom' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-LivingRoom' body={{level: 1}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-LivingRoom' name='PlumLP-LivingRoom' />
        </div>
    </div>
)

export { LivingRoom }
