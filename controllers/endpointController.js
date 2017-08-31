const { Endpoint } = require('../models/endpoint');


const endpoint = {
  
  getEndpoint: (req, response) => {
    const id = req.params.id;
    
    let data = null;

    const unstable = endpoint.randomUnstableSituation();
    
    if (!unstable) {
      Endpoint.findById(id)
        .then((res) => {
          const resObj = res.toObject();
      
          data = Endpoint.randomizeData(resObj);
          response.render('endpoint', { data: data });
        })
        .catch((err) => {
          response.send({ statusCode: 500, message: 'Endpoint doesn\'t exist' });
        })
    } else {
      response.send({ statusCode: 500, message: 'Endpoint is currently unreachable' });
    }
    
  },
  
  randomUnstableSituation: () => {
    const max = 100;
    const min = 1;
    
    const situation = Math.floor(Math.random() * (max - min)) + min;
    
    return situation <= 10;
  }
  
};

module.exports = endpoint;
