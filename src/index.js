import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import { Home } from 'routes/home'
import { Entry } from 'routes/entry'
import { Kitchen } from 'routes/kitchen'
import { Living } from 'routes/living'
import { Master } from 'routes/master'
import { Guest } from 'routes/guest'


import 'normalize.css'
import './index.css'

class App extends React.Component {
    constructor() {
        super()

        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <header className="header">
                        <nav className="header-navbar">
                            <div className="navbar-menu">
                                <Dropdown ref="Zones" className="navbar-dropdown">
                                    <DropdownTrigger className="navbar-dropdown-trigger">Zones</DropdownTrigger>
                                    <DropdownContent className="navbar-dropdown-content">
                                        <ul className="navbar-dropdown-content-list">
                                            <Link onClick={() => this.refs.support.hide()} to="/entry">
                                                <li>Entry</li>
                                            </Link>
                                            <Link onClick={() => this.refs.support.hide()} to="/kitchen">
                                                <li>Kitchen</li>
                                            </Link>
                                            <Link onClick={() => this.refs.support.hide()} to="/living">
                                                <li>Living Room</li>
                                            </Link>
                                            <Link onClick={() => this.refs.support.hide()} to="/master">
                                                <li>Master Bedroom</li>
                                            </Link>
                                            <Link onClick={() => this.refs.support.hide()} to="/guest">
                                                <li>Guest Bedroom</li>
                                            </Link>
                                        </ul>
                                    </DropdownContent>
                                </Dropdown>
                            </div>
                        </nav>
                    </header>
                    <div className="app">
                        <Route exact path="/" component={Home}/>
                        <Route path="/entry" component={Entry}/>
                        <Route path="/kitchen" component={Kitchen}/>
                        <Route path="/living" component={Living}/>
                        <Route path="/master" component={Master}/>
                        <Route path="/guest" component={Guest}/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
