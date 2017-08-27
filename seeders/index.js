const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];
const farmData = require('./server-data');
const endpointData = require('./endpoint-data');

const mongoose = require('mongoose');
const seeder = require('mongoose-seed');

/* TODO: import _id s from newly created endpoints */

// Connect to MongoDB via Mongoose
seeder.connect(`mongodb://${config.DOMAIN}/${config.DATABASE_NAME}`, function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/endpoint.js',
    'models/farm.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Endpoint', 'Farm'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(endpointData, function() {
      seeder.populateModels(farmData, function () {
      
      });
    });
  });
});
