const mongoose = require('mongoose');

const { Schema } = mongoose;

const Users = new Schema(
  {
    _id: String,
    createdAt: Date,
    role: String,
    email: String,
    password: String,
    fullName: String,
    firstName: String,
    lastName: String,
    gender: String,
    overview: String,
    university: String,
    course: String,
    birthday: String,
    isArchived: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    _id: false,
  }
);

module.exports = mongoose.model('Users', Users, 'users');
