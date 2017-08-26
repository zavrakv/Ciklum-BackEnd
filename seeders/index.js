const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];
const { Server } = require('../models/server');
const serverData = require('./server-data');
const endpointData = require('./endpoint-data');

const mongoose = require('mongoose');
const seeder = require('mongoose-seed');

/* TODO: import _id s from newly created endpoints */

// Connect to MongoDB via Mongoose
seeder.connect(`mongodb://${config.DOMAIN}/${config.DATABASE_NAME}`, function() {

  // Load Mongoose models
  seeder.loadModels([
    'models/server.js',
    'models/endpoint.js',
  ]);

  // Clear specified collections
  seeder.clearModels(['Server'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(serverData, function() {

    });

  });

  seeder.clearModels(['Endpoint'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(endpointData, function() {

    });
  })

});
