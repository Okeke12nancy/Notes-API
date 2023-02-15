const Note = require("../models/notes");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-errors");

const getAllNotes = asyncWrapper(async (req, res) => {
  const notes = await Note.find({});
  res.status(200).json({ notes });
});

const createNotes = asyncWrapper(async (req, res) => {
  const note = await Note.create(req.body);
  res.status(201).json({ note });
});

const getOneNote = asyncWrapper(async (req, res, next) => {
  const { id: noteID } = req.params;
  const note = await Note.findOne({ _id: noteID });
  if (!note) {
    return next(createCustomError(`No task with id: ${noteID}, 404`));
  }

  res.status(200).json({ note });
  // res.json({ id: req.params.id });
});

const updateNote = asyncWrapper(async (req, res) => {
  const { id: noteID } = req.params;
  const note = await Note.findOneAndUpdate({ _id: noteID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!note) {
    return next(createCustomError(`No task with id: ${noteID}, 404`));
  }
  res.status(200).json({ note });
});

const deleteNote = asyncWrapper(async (req, res) => {
  const { id: noteID } = req.params;
  const note = await Note.findOneAndDelete({ _id: noteID });
  if (!note) {
    return next(createCustomError(`No task with id: ${noteID}, 404`));
    // return res.status(404).json({ msg: `No task with id: ${taskID}` });
  }
  res.status(200).json({ note });
});

module.exports = {
  getAllNotes,
  getOneNote,
  createNotes,
  updateNote,
  deleteNote,
};
