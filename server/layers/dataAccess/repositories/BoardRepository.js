const BaseRepository = require('../BaseRepository');
const Board = require('./../models/Board');

class BoardRepository extends BaseRepository {
  constructor() {
    super(Board);
  }

  async archive(boardId) {
    return this.update(
        {
          _id: boardId,
        },
        {
          $set: {
            isArchived: true,
          },
        }
    );
  }

  async updateJob(boardId, board) {
    return this.update({ _id: boardId }, { $set: board });
  }

}

const boardRepository = new BoardRepository();

module.exports = boardRepository;
