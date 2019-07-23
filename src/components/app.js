import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { browserHistory } from 'react-router'
import NavigationBar from './header'
import Footer from './footer'
import WelcomePage from './pages/welcome'
import './styles.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="RootContainer">
                    <NavigationBar />
                    <Route name="home" exact path="/hydrogen" component={WelcomePage} />
                    <Footer />
                    <Redirect exact from="/" to="/hydrogen" />
                </div>
            </Router>
        )
    }
}

export default App