import React, { Component } from 'react'
import './styles.css'

class DataVisualizationPage extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    _scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   

    render() {
        return (
            <div className="Container">
                <div id="DataVisualizationLandingBackground">
                    <div id="BtnPageDown" onClick={this._scrollToMyRef}>
                        <arrow className="right"></arrow>
                        EXPLORE
                    </div>
                </div>
                <div id="DataVisualizationContentContainer" ref={this.myRef}></div>
            </div>
        )
    }
}

export default DataVisualizationPage