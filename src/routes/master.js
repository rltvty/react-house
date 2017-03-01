import React from 'react'

import { Button, Checkbox, Range, Select } from 'inputs'

const Master = () => (
    <div className='zone'>
        <h2>Master</h2>
        <h3>Bathroom</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-MasterBath' body={{level: 37}} name='auto_bath' />
                <Button text='Off' url='/lights/controls/PlumLP-MasterBath' body={{level: 1}} name='off_bath' />
            </div>
            <Range url='/lights/controls/PlumLP-MasterBath' name='PlumLP-MasterBath' />
        </div>
        <h3>Bedroom</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-MasterBed' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-MasterBed' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-MasterBed' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-MasterBed' body={{level: 1}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-MasterBed' name='PlumLP-MasterBed' />
        </div>
    </div>
)

export { Master }
