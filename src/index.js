import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Provider } from 'react-redux'

import './stylesheets/main.scss'
import store from './store'
import Routes from './routes'
import { renderRoutes } from 'react-router-config'

if (module.hot) {
  module.hot.accept()
}

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.hydrate(<Root />, document.querySelector('#root'))
