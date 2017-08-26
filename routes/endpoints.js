const express = require('express');
const router = express.Router();

const endpointCtrl = require('../controllers/endpointController');

router.get('/endpoints/get-endpoint/:id', endpointCtrl.getEndpoint);



module.exports = router;
