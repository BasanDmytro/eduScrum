const router = require('express').Router();
const UserService = require('../../layers/domain/services/UserService');

router.post('/login', async (req, res) => { // count of boards
  try {
    const data = { email: req.body.email, password: req.body.password };
    const user = await UserService.authUser(data);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => { // count of boards
  try {
    const query = req.query || {};
    const users = await UserService.getUsers(query);
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post('/logup', async (req, res) => { // count of boards
  try {
    let user = req.body && req.body.user;
    const data = {
      email: user.email || '',
      password: user.password || '',
      fullName: `${user.firstName} ${user.lastName}` || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      isArchived: false,
      isBlocked: false,
      createdAt: new Date()
    };
    const userObj = await UserService.createUser(data);
    res.status(200).send(userObj);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
