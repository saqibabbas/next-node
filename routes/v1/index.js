const express = require('express');
const productRoute =  require('./product.route');
const authRoute =  require('./auth.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
  
module.exports = router;