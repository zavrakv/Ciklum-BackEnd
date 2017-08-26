const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.connect(`mongodb://${config.DOMAIN}/${config.DATABASE_NAME}`, {
  useMongoClient: true,
});

autoIncrement.initialize(connection);

module.exports = { mongoose, autoIncrement };
