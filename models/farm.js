const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    servers: Array,
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

farmSchema.methods.createFarm = function () {
  const res = this.servers;
  console.log(res);
};

const Farm = mongoose.model('Farm', farmSchema);

module.exports = { Farm };
