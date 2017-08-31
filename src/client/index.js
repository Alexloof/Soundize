import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';

import "./stylesheets/main.scss";



const Root = () => {
    return (
        <Router history={browserHistory}>
            <Route>
                <Route path="/" component={Login}/>
                <Route path="/hem"component={App}>
                    <IndexRoute component={Home} />
                </Route>
            </Route>
        </Router>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);