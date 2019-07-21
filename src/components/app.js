import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { browserHistory } from 'react-router'
import HomePage from './pages/homePage.js'
import NavigationBar from './header'
import Footer from './footer'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavigationBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App