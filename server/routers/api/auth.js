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

router.post('/logup', async (req, res) => { // count of boards
  try {
    const data = {
      email: 'test@gmail.com',
      password: 'test',
      fullName: 'Test Test',
      firstName: 'Test',
      lastName: 'Test',
      isArchived: false,
      isBlocked: false,
      createdAt: new Date()
    };
    const user = await UserService.createUser(data);
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
