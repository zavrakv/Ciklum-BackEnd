const express = require('express');
const router = express.Router();

const serverCtrl = require('../controllers/serverController');

router.post('/api/servers/create-server', serverCtrl.createServer);
router.get('/api/servers/get-server-status', serverCtrl.getServerStatus);

module.exports = router;
