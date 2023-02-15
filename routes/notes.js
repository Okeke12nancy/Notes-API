const express = require("express");
const router = express.Router();

const {
  getAllNotes,
  getOneNote,
  createNotes,
  updateNote,
  deleteNote,
} = require("../controllers/notes");

router.route("/notes").get(getAllNotes).post(createNotes);
router.route("/:id").get(getOneNote).patch(updateNote).delete(deleteNote);

module.exports = router;
