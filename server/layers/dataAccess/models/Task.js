const mongoose = require('mongoose');

const { Schema } = mongoose;

const Task = new Schema(
  {
    _id: String,
    title: String,
    label: String,
    time: String,
    description: String,
    isArchived: Boolean,
    status: String,
    createdAt: Date,
    laneId: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', Task, 'task');
