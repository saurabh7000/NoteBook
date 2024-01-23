const mongoose = require("mongoose");

const createSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide title"],
    maxLength: [20, "Title length should of 20 length"],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    trim: true,
  },
});

module.exports = mongoose.model("createNote", createSchema);
