const router = require('express').Router();
const BoardService = require('../../layers/domain/services/BoardService');

router.head('/', async (req, res) => { // count of boards
  try {
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
