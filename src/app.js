const express = require('express');
const routesv1 = require('../src/routes/v1');

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/api/v1', routesv1);

app.get('/', (req,res)=>{
    res.send('Welcome to next-node, a Node Js bolilerplate.')
});

module.exports = app;