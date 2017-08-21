const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

const app = express();

const clientPath = path.resolve(__dirname, '..', 'dist');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(clientPath));

process.stdout.write('Initializing customForm database');
require('./dbcreation');

// middleware function
app.use('/api/v1', require('./api/v1/'));

app.use((req, res) => {
  res.status(404).send({ error: 'Resource not found' });
});

module.exports = app;
