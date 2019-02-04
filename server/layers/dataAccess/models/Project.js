const mongoose = require('mongoose');
const Board = require('./Board');

const { Schema } = mongoose;

const Project = new Schema(
  {
    _id: String,
    boardsIds: [String],
    isArchived: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', Project, 'project');
