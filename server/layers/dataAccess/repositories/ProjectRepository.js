const BaseRepository = require('../BaseRepository');
const Project = require('./../models/Project');

class ProjectRepository extends BaseRepository {
  constructor() {
    super(Project);
  }

  async archive(projectId) {
    return this.update(
        {
          _id: projectId,
        },
        {
          $set: {
            isArchived: true,
          },
        }
    );
  }

  async updateJob(projectId, project) {
    return this.update({ _id: projectId }, { $set: project });
  }

}

const projectRepository = new ProjectRepository();

module.exports = projectRepository;
