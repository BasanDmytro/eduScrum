const router = require('express').Router();

const board = require('./board');
const project = require('./project');
const task = require('./task');
const auth = require('./auth');

router.use('/board', board);
router.use('/project', project);
router.use('/task', task);
router.use('/auth', auth);

module.exports = router;
