const UserRepository = require('../../dataAccess/repositories/UserRepository');

class UserService {
  constructor() {
    this.name = 'UserService';
  }

  async createUser(data) {
    return await UserRepository.create(data);
  }

  async authUser(data) {
    return await UserRepository.findOne(data);
  }

}

module.exports = new UserService();
