import React, { Component } from 'react';
import { Users } from "./containers/Users"
import { NotificationList } from "./containers/NotificationList"
import { AddNotification } from "./containers/AddNotification";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <Router>
                <div >
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Users} />
                        <Route path="/addmessage" component={AddNotification} />
                        <Route path="/userlist" component={Users}/>
                        <Route path="/notification" component={NotificationList}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;