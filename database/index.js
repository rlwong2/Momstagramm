const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});

const photoSchema = new mongoose.Schema({
    id: String,
    url: String,
    username: String,
    caption: String
})

let Photo = mongoose.model('Photo', photoSchema);

