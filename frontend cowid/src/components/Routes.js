import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';
import About from './About';
//import NavBar from './navbar';
import NavBar2 from './navbar2';

export  default  function Routes ()  {
    return (
        <div>
            <Router>
                {/* <NavBar /> */}
                <NavBar2/>
                <Switch>
                    <Route path="/" exact component={Dashboard}></Route>
                    <Route path="/searchBar" exact component={SearchBar}></Route>
                    <Route path="/about" exact component={About}></Route>
                </Switch>
            </Router>
        </div>
    )
}
