const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const data = await Note.find();
    res.send({ result: "Done", data: data });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

const getOneNote = async (req, res) => {
  try {
    const data = await Note.findOne({ _id: req.params._id });
    if (data) res.send({ result: "Done", data: data });
    else
      res.status(404).send({ result: "Fail", message: "Invalid Note Name" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

const createNewNote = async (req, res) => {
  try {
    const data = new Note(req.body);
    await data.save();
    res.send({ result: "Done", message: "Note is details has been added" });
  } catch (error) {
    if (error.errors.title)
      res
        .status(400)
        .send({ result: "Fail", message: error.errors.title.message });
    else if (error.errors.description)
        res
          .status(400)
          .send({ result: "Fail", message: error.errors.description.message });
    else
      res
        .status(500)
        .send({ result: "Fail", message: "Internal Server Error" });
  }
};

const updateOneNote = async (req, res) => {
  try {
    const data = await Note.findOne({ _id: req.params._id });
    if (data) {
      data.title = req.body.title ?? data.title;
      data.description = req.body.description ?? data.description;
      data.updated_at = new Date();
      await data.save();
      res.send({ result: "Done", message: "Note details has been Updated" });
    } else
      res.status(404).send({ result: "Fail", message: "Invalid Note Name" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

const deleteOneNote = async (req, res) => {
  try {
    const data = await Note.findOne({ _id: req.params._id });
    if (data) await Note.deleteOne({ _id: req.params._id });
    else
      res.status(404).send({ result: "Fail", message: "Invalid Note Name" });
  } catch (error) {
    res.status(500).send({ result: "Fail", message: "Internal Server Error" });
  }
};

module.exports = {
  getAllNotes,
  getOneNote,
  createNewNote,
  updateOneNote,
  deleteOneNote,
};
