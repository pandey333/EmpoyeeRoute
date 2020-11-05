import React from 'react';
import AddEmployee from './add';
import View from './view';
import Table from './table';
import Update from './update';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';


export default function Emp() {

    return (
        
        <Router>
        
        <Link to = {'/add'}><button>Add New Record</button></Link>
            <Switch>
                <Route exact path = '/add'>
                    <AddEmployee />
                </Route>
                <Route exact path = '/view/:id'>
                    <View />
                </Route>
                <Route exact path = '/update/:id'>
                    <Update />
                </Route>
                <Table />
            </Switch>
        </Router>
    );
} 