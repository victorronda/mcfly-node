const express = require('express');
const app = express();
const morgan = require('morgan')
require("dotenv").config();
const routes = require('./src/routes/index')
const mongoose = require("mongoose");


// Mongoose connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

// middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use('/api', routes);


module.exports = app;