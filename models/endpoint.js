const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const endpointSchema = new Schema({
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

endpointSchema.statics.getHashes = function () {
  const endpoint = this;
  const hashesArr = {};
  
  return endpoint.find()
    .then((endpoints) => {
      for (let i = 0; i < endpoints.length; i += 1) {
        let moduleName = endpoints[i].moduleName;
        hashesArr[moduleName] = endpoints[i]._id;
      }
      return hashesArr;
    })
};

/**
 * @memberOf Endpoint
 */

endpointSchema.statics.randomizeData = function (data) {
  
  const max = 100;
  const min = 1;
  const endpoint = this;
  const boolFields = ["queuesHealth", "threadHealth", "databaseHealth"];
  
  
  for(let item in data) {
    if (data.hasOwnProperty(item)) {
      
      
      if(data[item] === null) {
        data[item] = Math.floor(Math.random() * (max - min)) + min;
        
        for (let i = 0; i < boolFields.length; i += 1) {
          if (item === boolFields[i]) {
            data[item] > 50 ?
              data[item] = 'OK':
              data[item] = 'BAD';
          }
        }
        
      }
    }
  }
  
  return data;
};

const Endpoint = mongoose.model('Endpoint', endpointSchema);

module.exports = { Endpoint };
