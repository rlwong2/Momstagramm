const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const morgan = require('morgan');

const db = require('../database/index')

let app = express();

app.use(cors());
// app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/status', function(req, res){
    res.send({"message": "It's alive"});
});

app.get('/photos', function(req, res) {
    db.getPhotos((err, data) => {
      res.json(data)
    })
})

app.get('/stories', function(req, res) {
    db.getStories()
    res.json()
})

app.post('/photos', function(req, res) {
    db.postPhotos(req.body, (err, data) => {
        if (err) console.log(err)
        res.sendStatus(400)
      })
})

app.delete('/photos/:id?', function(req, res) {
    console.log(req.query.id)
    db.deletePhoto(req.query.id, (err, data) => {
        if (err) console.log(err)
        res.sendStatus(400)
      })
})

module.exports = app;