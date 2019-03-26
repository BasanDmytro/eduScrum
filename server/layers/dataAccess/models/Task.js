const mongoose = require('mongoose');

const { Schema } = mongoose;

const Task = new Schema(
  {
    _id: String,
    name: String,
    description: String,
    time: String,
    isArchived: Boolean,
    status: String,
    createdAt: Date,
    laneCode: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', Task, 'task');
