const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  
  userId:{  type: mongoose.Schema.Types.ObjectId,
     required: true,
     ref: 'users'},
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  added: { type: String},
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;