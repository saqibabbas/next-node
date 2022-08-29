const express = require('express');
const productRoute =  require('./product.route');
const authRoute =  require('./auth.route');
const albumRoute =  require('./album.route');
const purchaseRoute =  require('./purchase.route');

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
  {
    path: '/albums',
    route: albumRoute,
  },
  {
    path: '/purchases',
    route: purchaseRoute,
  }
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
  
module.exports = router;