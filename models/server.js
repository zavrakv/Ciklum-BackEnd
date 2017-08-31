const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serverSchema = new Schema({
  url: String,
  moduleName: {
    type: String,
    unique: true
  },
  moduleInitTime: {
    type: Date,
    default: null
  },
  systemTime: {
    type: Date,
    default: null
  },
  queuesInsert: {
    type: Number,
    default: null
  },
  queuesInsertToProcess: {
    type: Number,
    default: null
  },
  queuesIn: {
    type: Number,
    default: null
  },
  queuesInToProcess: {
    type: Number,
    default: null
  },
  queuesOut: {
    type: Number,
    default: null
  },
  queuesOutV2: {
    type: Number,
    default: null
  },
  queuesError: {
    type: Number,
    default: null
  },
  queuesHealth: {
    type: String,
    default: null
  },
  threadCount: {
    type: Number,
    default: null
  },
  threadHealth: {
    type: String,
    default: null
  },
  databaseHealth: {
    type: String,
    default: null
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

module.exports = { serverSchema };
