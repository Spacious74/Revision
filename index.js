const express = require('express'); 
const expressApp = express();
const bodyParser = require('body-parser');
const mainRouter = require('./routes/allroutes');
const path = require('path');

// serving all routes on the basis of their base routes
expressApp.use(bodyParser.json());
expressApp.use(mainRouter);


// base route
expressApp.get('/' ,(req,res) => {
    res.send("This is base route");
    res.end();
});


expressApp.listen(2000, ()=>{
    console.log('listening on port 2000');
});