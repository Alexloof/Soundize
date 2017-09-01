import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Stream from './components/Stream';

import "./stylesheets/main.scss";


const Root = () => {
    return (
        <Router history={browserHistory}>
            <Route>
                <Route path="/" component={Login}/>
                <Route path="/app"component={App}>
                    <Route path="stream"component={Home}>
                        <Route path="/stream" component={Stream}/>
                    </Route> 
                </Route>
            </Route>
        </Router>
    );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);