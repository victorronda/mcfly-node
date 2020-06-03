const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  phrase: {type: String, required: true, maxlength: 155},
  favorite: {type: Boolean, default: false}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;