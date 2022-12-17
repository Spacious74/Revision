const express = require('express');
const path = require('path');
const allRoutes = express.Router();

const userRoute = require('./user.route');
const productRoute = require('./product.route');


allRoutes.use('/user', userRoute);
allRoutes.use('/product', productRoute);

module.exports = allRoutes;