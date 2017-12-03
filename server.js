const express = require('express')

import { matchRoutes } from 'react-router-config'
import Routes from './src/routes'
import renderer from './src/helpers/renderer'
import createStore from './src/helpers/serverStore'

// Since the root/src dir contains our index.html
//app.use(express.static(__dirname + '/public/'))

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
//app.listen(process.env.PORT || 8080)

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const store = createStore(req)
  const context = {}
  const content = renderer(req, store, context)
  res.send(content)

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

app.listen(8080, () => {
  console.log('Listning on port 8080')
})
