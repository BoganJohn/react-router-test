import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/HomePage';
import Menu from './components/MenuPage'
import About from './components/AboutPage'
import NavBarPage from './NavBarPage'
import LocationPage from './components/LocationPage'


class Routes extends Component{
    render(){
        return(
                <Router>
                    <NavBarPage />
                <div>
                    <hr />
                    <Route name="Home" exact path="/" component={Home} />
                    <Route name="Menu" exact path="/menu" component={Menu} />
                    <Route name="About" exact path="/about" component={About} />
                    <Route name="Location" exact path="/location" component={LocationPage} />
                <hr />
                </div>
                </Router>
        )
    }
}

export default Routes;