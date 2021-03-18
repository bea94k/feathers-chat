const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  // get mongodb from config/default.json
  //console.log(app.get('mongodb'));

  // connect to MongoDB using connection string from config/default > process.env
  mongoose.connect(
    app.get('mongodb'),
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });

  app.set('mongooseClient', mongoose);
};
