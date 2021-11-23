const express = require('express');
const salesErrorHandler = require('../../middlewares/salesErrorHandler');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.use(salesErrorHandler);

module.exports = router;