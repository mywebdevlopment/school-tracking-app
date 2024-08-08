const mongoose = require('mongoose');

const ChildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isInSchool: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Child', ChildSchema);
