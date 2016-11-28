import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Main from '../components/Main';
import BlogContainer from '../containers/BlogContainer';

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={BlogContainer} />
        </Route>
    </Router>
);

module.exports = routes;