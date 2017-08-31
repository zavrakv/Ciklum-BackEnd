const express = require('express');
const router = express.Router();

const serverCtrl = require('../controllers/serverController');

router.post('/api/servers/create-server', serverCtrl.createServer);
router.post('/api/servers/get-server-status', serverCtrl.getServerStatus);
router.get('/api/servers/get-all-servers-status', serverCtrl.getAllServersStatus);

module.exports = router;
