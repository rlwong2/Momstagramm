const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

let app = express();

app.use(cors());
app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, '..client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('//status', function(req, res){
    res.send({"message": "It's alive"});
});

module.exports = app;