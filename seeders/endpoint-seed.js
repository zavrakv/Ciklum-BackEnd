const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];
const { Endpoint } = require('../models/endpoint');
const data = require('./endpoint-data');

const mongoose = require('mongoose');
const seeder = require('mongoose-seed');


// Connect to MongoDB via Mongoose
seeder.connect(`mongodb://${config.DOMAIN}/${config.DATABASE_NAME}`, function() {
  
  // Load Mongoose models
  seeder.loadModels([
    'models/endpoint.js',
  ]);
  
  // Clear specified collections
  seeder.clearModels(['Endpoint'], function() {
    
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      mongoose.connection.close();
    });
    
  });
});
