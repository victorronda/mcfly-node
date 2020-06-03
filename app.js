const express = require('express');
const app = express();
const morgan = require('morgan')
require("dotenv").config();
const routes = require('./src/routes/index')

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use(routes);


// start the server
app.listen(app.get('port'), () => console.log('Server on port', app.get('port')));
