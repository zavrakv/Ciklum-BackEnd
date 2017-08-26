const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];
const { Server } = require('../models/server');
const data = require('./server-data');

const mongoose = require('mongoose');
const seeder = require('mongoose-seed');


// Connect to MongoDB via Mongoose
seeder.connect(`mongodb://${config.DOMAIN}/${config.DATABASE_NAME}`, function() {
  
  // Load Mongoose models
  seeder.loadModels([
    'models/server.js',
  ]);
  
  // Clear specified collections
  seeder.clearModels(['Server'], function() {
    
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      mongoose.connection.close();
    });
    
  });
});
