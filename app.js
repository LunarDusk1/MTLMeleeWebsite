const express = require('express');
const path = require('path');

const app = express();

require('./routes')(app)

app.use(express.static(path.join(__dirname, 'static')));

var port = process.env.PORT||3000;
var server = app.listen(process.env.PORT||3000);
console.log('App available on http://localhost:3000');