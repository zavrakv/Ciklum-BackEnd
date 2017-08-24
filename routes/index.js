const express = require('express');
const router = express.Router();

const farmCtrl = require('../controllers/farmController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/create-farm', farmCtrl.createFarm);
router.get('/api/get-farm', farmCtrl.getAllFarms);

module.exports = router;
