const mongoose = require('mongoose');
const Task = require("./Task");

const { Schema } = mongoose;

const Board = new Schema(
  {
    _id: String,
    name: {type: String, required: true},
    tasksIds: [String],
    isArchived: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Board', Board, 'board');
