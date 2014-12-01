'use strict';

var express = require('express');
var controller = require('./Match.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.create);
router.get('/:userId', controller.match);


module.exports = router;