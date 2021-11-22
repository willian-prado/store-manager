const express = require('express');
const productErrorHandler = require('../../middlewares/productErrorHandler');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', create);

router.use(productErrorHandler);

module.exports = router;