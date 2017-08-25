const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    name: {
      type: String,
      unique: true,
    },
    servers: Array,
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = { Farm };
