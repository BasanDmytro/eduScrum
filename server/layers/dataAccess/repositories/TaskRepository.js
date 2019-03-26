const BaseRepository = require('../BaseRepository');
const Task = require('./../models/Task');

class TaskRepository extends BaseRepository {
  constructor() {
    super(Task);
  }

  async archive(taskId) {
    return this.update(
        {
          _id: taskId,
        },
        {
          $set: {
            isArchived: true,
          },
        }
    );
  }

  async restore(taskId) {
    return this.update(
      {
        _id: taskId,
      },
      {
        $set: {
          isArchived: true,
        },
      }
    );
  }

  async updateTask(taskId, task) {
    return this.update({ _id: taskId }, { $set: task });
  }
}

const taskRepository = new TaskRepository();

module.exports = taskRepository;
