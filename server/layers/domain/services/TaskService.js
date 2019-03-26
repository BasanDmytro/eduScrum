const moment = require('moment');
const TaskRepository = require('../../dataAccess/repositories/TaskRepository');

class TaskService {
  constructor() {
    this.name = 'TaskService';
  }

  async countTask(query) {
    return await TaskRepository.count(query);
  }

  async getTasks(query) {
    return await TaskRepository.find(query);
  }

  async createTask(task) {
    console.log(task);
    const taskObj = Object.assign(task, {
      isArchived: false,
      createdAt: new Date(),
    });
    const taskCreated = TaskRepository.create(taskObj);
    return taskCreated._id;
  }

  async updateTask(taskId, task) {
    await TaskRepository.updateTask(taskId, task);
  }

  async archive(taskId) {
    return TaskRepository.archive(taskId);
  }

  async restore(taskId) {
    return TaskRepository.restore(taskId);
  }

}

module.exports = new TaskService();
