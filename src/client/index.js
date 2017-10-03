import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  IndexRoute,
  history
} from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Login from './components/Login'
import Search from './components/Search'
import Redirect from './components/Redirect'

import './stylesheets/main.scss'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={Redirect} />
        <Route path="/app/stream" component={Parent} />
      </Switch>
    </Router>
  )
}

const renderRightComponent = props => {
  console.log(props)
  if ((props.match.url = '/app/stream')) {
    return <Home />
  } else if ((props.match.url = 'app/stream/search')) {
    return <Search />
  }
}

const Parent = props => {
  return <App {...props}>{renderRightComponent(props)}</App>
}

ReactDOM.render(<Root />, document.querySelector('#root'))
