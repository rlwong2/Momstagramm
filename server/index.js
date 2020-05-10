const app = require('./server.js');

var port = process.env.PORT || 3000;

const server = app.listen(port, () => {console.log(`Running the grams on ${port}`)});

module.exports = server;