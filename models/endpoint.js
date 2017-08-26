const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { autoIncrement } = require('../database/database');

const endpointSchema = new Schema({
  id: {
    type: Number,
    default: 1,
  },
  moduleName: String,
  moduleInitTime: Date,
  systemTime: Date,
  queuesInsert: Number,
  queuesInsertToProcess: Number,
  queuesIn: Number,
  queuesInToProcess: Number,
  queuesOut: Number,
  queuesOutV2: Number,
  queuesError: Number,
  queuesHealth: String,
  threadCount: Number,
  threadHealth: String,
  databaseHealth: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

/**
 * @memberOf Endpoint
 */

endpointSchema.statics.randomizeData = function (data) {
  
  const max = 100;
  const min = 1;
  
  for(let item in data) {
    if (data.hasOwnProperty(item)) {
      
      if(data[item] === null) {
        data[item] = Math.floor(Math.random() * (max - min)) + min;
      }
    }
  }
  
  return data;
};

endpointSchema.plugin(autoIncrement.plugin, {
  model: 'Endpoint',
  field: 'id',
  startAt: 1,
});

const Endpoint = mongoose.model('Endpoint', endpointSchema);

module.exports = { Endpoint };
