const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.send("This is the product page");
});

module.exports = productRouter;