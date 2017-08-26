const { Endpoint } = require('../models/endpoint');


const endpoint = {
  
  getEndpoint: (req, response) => {
    const id = req.params.id;
    
    let data = null;
    
    Endpoint.findOne({ id })
      .then((res) => {
        const resObj = res.toObject();
        
        data = Endpoint.randomizeData(resObj);
        
        response.render('endpoint', { data: data });
      })
    
  },
  
};

module.exports = endpoint;
