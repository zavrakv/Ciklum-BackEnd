const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { serverSchema } = require('./server');
const { Endpoint } = require('./endpoint');
const env = process.env.NODE_ENV;
const config = require('../config/config.json')[env];

const farmSchema = new Schema({
    name: {
      type: String,
      unique: true,
    },
    servers: [serverSchema],
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

farmSchema.post('save', function (farm) {
  
  Endpoint.getHashes()
    .then(hashes => {
    
      for (let i = 0; i < farm.servers.length; i += 1) {
        for (let module in hashes) {
          if (farm.servers[i].moduleName === module) {
            let hash = hashes[module];
            let url = `http://${config.DOMAIN}:${config.PORT}/endpoints/get-endpoint/${hash}`;
        
            Farm.update(
              {_id: farm._id, 'servers._id': farm.servers[i]._id},
              {
                '$set': {
                  'servers.$.url': url
                }
              })
              .then((err, numAffected) => {
            
              })
          }
        }
      }
    });
  
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = { Farm };
