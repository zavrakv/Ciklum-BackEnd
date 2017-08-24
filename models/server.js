const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema({
  moduleName: String,
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

const Server = mongoose.model('Server', serverSchema);
