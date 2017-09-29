import React from 'react'
import ReactDOM from 'react-dom'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  browserHistory
} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import Redirect from './components/Redirect'

import './stylesheets/main.scss'

const Root = () => {
  return (
    <Router history={browserHistory}>
      <Route>
        <Route path="/" component={Login} />
        <Route path="/app" component={App}>
          <IndexRoute component={Redirect} />
          <Route path="stream" component={Home} />
          <Route path="search/:id" component={Search} />
        </Route>
      </Route>
    </Router>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
