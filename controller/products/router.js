const express = require('express');
const productErrorHandler = require('../../middlewares/productErrorHandler');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);

router.use(productErrorHandler);

module.exports = router;