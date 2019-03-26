const router = require('express').Router();
const TaskService = require('../../layers/domain/services/TaskService');

router.head('/', async (req, res) => { // count of tasks
  try {
    const resultCount = await TaskService.countTask(req.query);
    res.setHeader('COUNT_TASKS', resultCount);
    res.status(200).end();
  } catch (err) {
    console.log(err);
  }
});

router.get('/', async (req, res) => {
  try {
    console.log(req.query);
    const tasks = await TaskService.getTasks(req.query);
    console.log(tasks);
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
  }
});

router.post('/create', async (req, res) => {
  const { body: data } = req;
  console.log(data);
  const { task: taskObj } = data;
  try {
    const taskId = await TaskService.createTask(taskObj);
    res.status(201).send(taskId);
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(400).send('cannot create duplicate task');
    } else {
      console.log(err);
    }
  }
});

router.post('/update', async (req, res) => {
  const { body: data } = req;
  console.log(data);
  const { task: taskObj } = data;
  try {
    const taskId = await TaskService.updateTask(taskObj._id, taskObj);
    res.status(201).send(taskId);
  } catch (err) {
    if (err.name === 'MongoError' && err.code === 11000) {
      res.status(400).send('cannot create duplicate task');
    } else {
      console.log(err);
    }
  }
});

module.exports = router;
