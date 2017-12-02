const express = require('express')
const app = express()

// Since the root/src dir contains our index.html
app.use(express.static(__dirname + '/public/'))

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
app.listen(process.env.PORT || 8080)
