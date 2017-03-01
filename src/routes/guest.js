import React from 'react'

import { Button, Checkbox, Range, Select } from 'inputs'

const Guest = () => (
    <div className='zone'>
        <h2>Guest</h2>
        <h3>Bathroom</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-GuestBath' body={{level: 37}} name='auto_bath' />
                <Button text='Off' url='/lights/controls/PlumLP-GuestBath' body={{level: 1}} name='off_bath' />
            </div>
            <Range url='/lights/controls/PlumLP-GuestBath' name='PlumLP-GuestBath' />
        </div>
        <h3>Bedroom</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-GuestBed' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-GuestBed' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-GuestBed' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-GuestBed' body={{level: 1}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-GuestBed' name='PlumLP-GuestBed' />
        </div>
    </div>
)

export { Guest }
