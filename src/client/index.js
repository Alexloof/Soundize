import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';

import "./stylesheets/main.scss";

const Root = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="hem" component={Home}/>
            </Route> 
        </Router>
    );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')   
);