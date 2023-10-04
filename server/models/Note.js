const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note name is required"],
  },
  description: {
    type: String,
    required: [true, "Note name is required"],
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});



const Note = new mongoose.model("Note", NoteSchema);
module.exports = Note;
