import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import RedirectLogin from './components/Redirect'
import Discover from './components/Discover'
import DiscoverCategory from './components/DiscoverCategory'
import PlaylistDetail from './components/PlaylistDetail'

import './stylesheets/main.scss'

const app_routes = [
  {
    path: '/stream',
    component: App,
    routes: [
      {
        path: '/stream/me',
        component: Home,
        exact: false
      },
      {
        path: '/stream/discover',
        component: Discover,
        exact: true
      },
      {
        path: '/stream/discover/:category',
        component: DiscoverCategory,
        exact: false
      },
      {
        path: '/stream/discover/playlist/:user/:id',
        component: PlaylistDetail,
        exact: false
      },
      {
        path: '/stream/search',
        component: Search,
        exact: false
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
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/app" component={RedirectLogin} />
          {app_routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Redirect from="/" to="/login" />
          <Route component={() => <div>404</div>} />
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
