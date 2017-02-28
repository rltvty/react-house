import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import './navbar.css'

class NavBar extends React.Component {
    constructor () {
        super()

        this.state = {
        }
    }

    render() {
        return (
            <header className="header">
                <nav className="header-navbar">
                    <div className="navbar-menu">
                        <Dropdown ref="Zones" className="navbar-dropdown">
                            <DropdownTrigger className="navbar-dropdown-trigger">Zones</DropdownTrigger>
                            <DropdownContent className="navbar-dropdown-content">
                                <ul className="navbar-dropdown-content-list">
                                    <Link onClick={() => this.refs.support.hide()} to="/living"><li>Living Room</li></Link>
                                    <Link onClick={() => this.refs.support.hide()} to="/downstairs"><li>Downstairs</li></Link>
                                    <Link onClick={() => this.refs.support.hide()} to="/master"><li>Master Bedroom</li></Link>
                                    <Link onClick={() => this.refs.support.hide()} to="/guest"><li>Guest Bedroom</li></Link>
                                    <Link onClick={() => this.refs.support.hide()} to="/loft"><li>Upstairs Loft</li></Link>
                                </ul>
                            </DropdownContent>
                        </Dropdown>
                    </div>
                </nav>
            </header>
        )
    }
}

export { NavBar }