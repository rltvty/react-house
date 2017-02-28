import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { NavBar } from 'components/navbar'
import { Home } from 'routes/home'
import { LivingRoom } from 'routes/living_room'


import 'normalize.css'
import './index.css'

const App = () => (
    <BrowserRouter>
        <div className="app-wrapper">
            <NavBar />
            <div className="app">
                <Route exact path="/" component={Home}/>
                <Route path="/living" component={LivingRoom}/>
            </div>
        </div>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
