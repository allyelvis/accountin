const express = require('express');
const router = express.Router();
const { createMenuItem, getMenu } = require('../controllers/menuController');

router.post('/', createMenuItem);
router.get('/', getMenu);

module.exports = router;
