const express = require('express');

const authController = require('../controllers/authController')

const router = express.Router();

router.get('/data', authController.getData)

router.post('/login', authController.postLogin);

router.post('/register', authController.postRegister);

module.exports = router;