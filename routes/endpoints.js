const express = require('express');
const router = express.Router();

const endpointCtrl = require('../controllers/endpointController');

router.get('/endpoint', function(req, res, next) {
  res.render('endpoint', { data: endpointCtrl.getEndpoint() });
});

// router.get('/api/endpoints/get-endpoint', endpointCtrl.getEndpoint);



module.exports = router;
