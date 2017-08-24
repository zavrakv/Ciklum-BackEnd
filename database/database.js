const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ciklum_db', {
  useMongoClient: true,
});

module.exports = mongoose;