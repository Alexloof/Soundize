import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  IndexRoute,
  history,
  Redirect
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import RedirectLogin from './components/Redirect'

import './stylesheets/main.scss'

const routes = [
  {
    path: '/stream',
    component: App,
    routes: [
      {
        path: '/stream/me',
        component: Home
      },
      {
        path: '/stream/search',
        component: Search
      }
    ]
  }
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
)

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/app" component={RedirectLogin} />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        <Redirect from="/" to="/login" />
        <Route component={() => <div>404</div>} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
