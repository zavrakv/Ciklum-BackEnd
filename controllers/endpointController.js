const { Endpoint } = require('../models/endpoint');


const endpoint = {
  
  getEndpoint: (req, res) => {
    return {
      hello: 'Valentine',
      world: 'Zavrak'
    }
  },
  
};

module.exports = endpoint;
