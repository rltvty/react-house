import React from 'react'

import { Button, Checkbox, Range, Select } from 'inputs'

const Entry = () => (
    <div className='zone'>
        <h3>Stairs</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='On' url='/lights/controls/PlumLP-Stairs-A' body={{level: 255}} name='on' />
                <Button text='Off' url='/lights/controls/PlumLP-Stairs-A' body={{level: 0}} name='off' />
            </div>
        </div>
        <h3>Entry</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-EntryWay' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-EntryWay' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-EntryWay' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-EntryWay' body={{level: 1}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-EntryWay' name='PlumLP-EntryWay' />
        </div>
        <h3>Half Bath</h3>
        <div className="control_group">
            <div className="two_wide">
                <Button text='Bright' url='/lights/controls/PlumLP-HalfBath' body={{level: 255}} name='bright' />
                <Button text='Half' url='/lights/controls/PlumLP-HalfBath' body={{level: 80}} name='half' />
            </div>
            <div className="two_wide">
                <Button text='Dim' url='/lights/controls/PlumLP-HalfBath' body={{level: 37}} name='dim' />
                <Button text='Off' url='/lights/controls/PlumLP-HalfBath' body={{level: 1}} name='off' />
            </div>
            <Range url='/lights/controls/PlumLP-HalfBath' name='PlumLP-HalfBath' />
        </div>
    </div>
)

export { Entry }
