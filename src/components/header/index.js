import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import WebsiteLogo from '../websiteLogo'

class NavigationBar extends Component {
    render() {
        return (
            <header className="header">
                <div className="headerLogoContainer">
                    <WebsiteLogo></WebsiteLogo>
                </div>
                <div id="headerButtons">
                    <li className="navButton">
                        <Link to="/hydrogen">
                            <button className="navMenuButtons" >
                                HYDROGEN
                                <arrow className="right"></arrow>
                            </button>
                        </Link>
                        <Link to="/helium">
                            <button className="navMenuButtons" >
                                HELIUM
                                <arrow className="right"></arrow>
                            </button>
                        </Link>
                        <Link to="/silicon">
                            <button className="navMenuButtons" >
                                SILICON
                                <arrow className="right"></arrow>
                            </button>
                        </Link>
                    </li>
                </div>
                <div className="clearfix"></div>
            </header>
        )
    }
}

export default NavigationBar