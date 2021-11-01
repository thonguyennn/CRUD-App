const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/mystore', meController.stored);
router.get('/trash', meController.trash);


module.exports = router;