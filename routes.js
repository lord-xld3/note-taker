const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Notes data
let notes = [];

// Route to get all notes
router.get('/notes', (req, res) => {
  res.json(notes);
});

// Route to add a new note
router.post('/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(newNote);
  res.json(newNote);
});

// Route to delete a note by id
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  notes = notes.filter((note) => note.id !== noteId);
  res.sendStatus(204);
});

// Route to get a specific note by id
router.get('/notes/:id', (req, res) => {
  const note = notes.find((n) => n.id === req.params.id);
  if (note) {
    res.json(note);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
