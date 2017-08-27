const mongoose = require('mongoose');
const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];

mongoose.connect(`mongodb://localhost/${config.DATABASE_NAME}`, {
  useMongoClient: true,
});

module.exports = { mongoose };
