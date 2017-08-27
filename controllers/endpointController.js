const { Endpoint } = require('../models/endpoint');


const endpoint = {
  
  /* TODO: guard this route */
  getEndpoint: (req, response) => {
    const id = req.params.id;
    
    let data = null;
    console.log(id);
    Endpoint.findById(id)
      .then((res) => {
        const resObj = res.toObject();
        
        data = Endpoint.randomizeData(resObj);
        response.render('endpoint', { data: data });
      })
  },
  
};

module.exports = endpoint;
