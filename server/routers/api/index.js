const router = require('express').Router();

const board = require('./board');
const project = require('./project');
const task = require('./task');

router.use('/board', board);
router.use('/project', project);
router.use('/task', task);

module.exports = router;
