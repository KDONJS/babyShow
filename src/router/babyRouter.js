const express = require('express');
const router = express.Router();
const babyController = require('../controller/babyController');

router.get('/', babyController.listarBaby);
router.post('/', babyController.crearBaby);
router.post('/colectivo', babyController.crearBabiesColectivo);
router.post('/login', babyController.loginBaby);

module.exports = router;