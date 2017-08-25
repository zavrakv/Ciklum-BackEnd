const express = require('express');
const router = express.Router();

const farmCtrl = require('../controllers/farmController');

router.post('/api/farms/create-farm', farmCtrl.createFarm);
router.get('/api/farms/get-all-farms', farmCtrl.getAllFarms);
router.get('/api/farms/get-farm-by-id', farmCtrl.getFarmById);
router.post('/api/farms/update-farm', farmCtrl.updateFarm);
router.delete('/api/farms/delete-farm', farmCtrl.deleteFarm);

module.exports = router;
