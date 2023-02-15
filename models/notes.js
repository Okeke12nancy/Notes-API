const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxlength: [20, "title can not be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide description"],
    trim: true,
    maxlength: [100, "description can not be more than 100 characters"],
  },
});

module.exports = mongoose.model("Notes", TaskSchema);
