const express = require('express');
const routesv1 = require('../src/routes/v1');

const app = express();

// v1 api routes
app.use('/api/v1', routesv1);

module.exports = app;