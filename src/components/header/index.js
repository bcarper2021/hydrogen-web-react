import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../componentStyles.css'

class NavigationBar extends Component {
    render() {
        return (
            <header className="header">
                <ul id="headerButtons">
                    <li className="navButton">
                        <Link to="">Home</Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default NavigationBar