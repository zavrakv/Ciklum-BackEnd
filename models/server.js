const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema({
  url: String,
  moduleName: {
    type: String,
    unique: true
  },
  moduleInitTime: Date,
  systemTime: Date,
  queuesInsert: Number,
  queuesInsertToProcess: Number,
  queuesIn: Number,
  queuesInToProcess: Number,
  queuesOut: Number,
  queuesOutV2: Number,
  queuesError: Number,
  queuesHealth: String,
  threadCount: Number,
  threadHealth: String,
  databaseHealth: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = { serverSchema };
