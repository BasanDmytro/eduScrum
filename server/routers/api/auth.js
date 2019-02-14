const router = require('express').Router();

router.post('/login', async (req, res) => { // count of boards
  try {
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

router.post('/logup', async (req, res) => { // count of boards
  try {
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
