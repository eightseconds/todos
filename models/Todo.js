const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // dueDate: {
  //   type: Date,
  //   required: false
  // },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Todos', TodoSchema);