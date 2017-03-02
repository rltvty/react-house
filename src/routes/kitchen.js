import React from 'react'

import { Button, Checkbox, Range, Select } from 'inputs'

const Kitchen = () => (
    <div className='zone'>
        <h3>Kitchen</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-Kitchen' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-Kitchen' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-Kitchen' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-Kitchen' body={{level: 0}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-Kitchen' name='PlumLP-Kitchen' />
        </div>
        <h3>Dining Room</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-DiningRoom' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-DiningRoom' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-DiningRoom' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-DiningRoom' body={{level: 0}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-DiningRoom' name='PlumLP-DiningRoom' />
        </div>
    </div>
)

export { Kitchen }
