const router = require('express').Router();
const ProjectService = require('../../layers/domain/services/ProjectService');

router.head('/', async (req, res) => { // count of projects
  try {
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
