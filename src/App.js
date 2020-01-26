import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from 'react-router-dom';
import Dashboard from '../src/Directories/Dashboard/dashboard'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/dashboard"
                        component={Dashboard}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;

