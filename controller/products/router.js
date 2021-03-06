const express = require('express');
const productErrorHandler = require('../../middlewares/productErrorHandler');
const create = require('./create');
const getAll = require('./getAll');
const getById = require('./getById');
const remove = require('./remove');
const update = require('./update');

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getById);
router.delete('/:id', remove);
router.put('/:id', update);

router.use(productErrorHandler);

module.exports = router;