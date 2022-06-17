const express = require('express');
const routesv1 = require('../src/routes/v1');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/api/v1', routesv1);

module.exports = app;