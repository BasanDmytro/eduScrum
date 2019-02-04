const mongoose = require('mongoose');

const { Schema } = mongoose;

const Task = new Schema(
  {
    _id: String,
    name: String,
    description: String,
    time: Date,
    isArchived: Boolean,
    createdAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', Task, 'task');
