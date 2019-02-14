const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema(
  {
    _id: String,
    createdAt: Date,
    roles: Object,
    email: String,
    password: String,
    fullName: String,
    firstName: String,
    lastName: String,
    gender: String,
    overview: String,
    university: String,
    course: String,
    isArchived: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    _id: false,
  }
);

module.exports = mongoose.model('Users', Users, 'users');
