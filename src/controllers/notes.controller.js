const notesHandler = {};
const Note = require("../models/Note");

notesHandler.getNotes = async (req, res) => { 
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.json({ message: error });
  }
};

notesHandler.createNote = async (req, res) => {
  const { title, content, author, date} = req.body;
  const note = new Note( { title, content, author, date } );
  try {
    await note.save();
    res.json({ message: "Note saved succesfully!"});
  } catch (error) {
    res.json({ message: error });
  }
};

notesHandler.getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    res.json({ message: error });
  }
}; 

notesHandler.updateNote = async (req, res) => {
  const { title, content, author, date } = req.body;
  try {
    await Note.findOneAndUpdate({ _id: req.params.id}, { title, content, author, date });
    res.json({ message: "Note updated succesfully!"});
  } catch (error) {
    res.json({ message: error});
  }
};

notesHandler.deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted"});
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = notesHandler;