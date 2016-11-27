import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main';
import Blog from '../components/Blog';

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Blog} />
        </Route>
    </Router>
);

module.exports = routes;