const express = require('express');
const bodyParser = require('body-parser');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const app = express();

app.use(bodyParser.json());


app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;