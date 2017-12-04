const express = require('express')

import { matchRoutes } from 'react-router-config'
import Routes from './src/routes'
import renderer from './src/helpers/renderer'
import createStore from './src/helpers/serverStore'

const app = express()

app.use(express.static('dist'))

app.get('*', (req, res) => {
  const store = createStore(req)

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve)
        })
      }
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)
    if (context.url) {
      return res.redirect(301, context.url)
    }
    if (context.notFound) {
      res.status(404)
    }
    res.send(content)
  })
})

var port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('Listning on port 8080')
})
