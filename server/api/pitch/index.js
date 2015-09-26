'use strict';

var express = require('express');
var controller = require('./pitch.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/findByUser/:id2', controller.findByUser);
router.get('/findByBubble/:id2', controller.findByBubble);

module.exports = router;