import React, { Component } from 'react'
import './style.css'

class DropdownMenu extends Component {
    render() {
        return (
            <div class="dropdown">
                <button class="dropbtn">PROJECTS</button>
                <div class="dropdown-content">
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
                </div>
            </div>
        );
      }
}

export default DropdownMenu