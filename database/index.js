const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true}, { useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});

const photoSchema = new mongoose.Schema({
    id: String,
    url: String,
    avatar: String,
    username: String,
    caption: String
})

const Photos = mongoose.model('Photos', photoSchema);

const getPhotos = (cb) => {
    Photos.find()
      .then((response) => {
        cb(null, response)
      })
      .catch((err) => {
        cb(err)
      })
  }

const postPhotos = (object, cb) => {
    Photos.create(object)
        .then((response) => {
            cb(null, response)
        })
        .catch((err) => {
            cb(err) 
        })
}

const deletePhoto = (id, cb) => {
    Photos.findByIdAndDelete(id)
        .then((response) => {
            cb(null, response)
        })
        .catch((err) => {
            cb(err) 
        })
}

module.exports = {
    Photos: Photos,
    getPhotos: getPhotos,
    postPhotos: postPhotos,
    deletePhoto: deletePhoto,
  };

