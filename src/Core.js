import React, { Component } from 'react';
import Login from './Screens/Login/index.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Core extends Component {  
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/log">
                            <Login/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Core;