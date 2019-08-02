import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { browserHistory } from 'react-router'
import NavigationBar from './header'
import Footer from './footer'
import WelcomePage from './pages/welcome'
import DataVisualizationPage from './pages/dataVisualization'
import TravelsPage from './pages/travels'
import './styles.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="RootContainer">
                    <NavigationBar />
                    <Route name="home" exact path="/hydrogen" component={WelcomePage} />
                    <Route name="dataVisualization" exact path="/silicon" component={DataVisualizationPage} />
                    <Route name="travels" exact path="/helium" component={TravelsPage} />
                    <Footer />
                    <Redirect exact from="/" to="/hydrogen" />
                </div>
            </Router>
        )
    }
}

export default App