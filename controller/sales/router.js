const express = require('express');
const salesErrorHandler = require('../../middlewares/salesErrorHandler');
const create = require('./create');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.use(salesErrorHandler);

module.exports = router;