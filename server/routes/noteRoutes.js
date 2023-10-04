const express = require("express");
const {getAllNotes,getOneNote,createNewNote,updateOneNote,deleteOneNote} = require("../controllers/noteController");
const { verifyToken,verifyTokenAdmin } = require('../middlewares')

const router = express.Router();

router.get("/note",verifyToken, getAllNotes);
router.get("/note/:_id",verifyToken, getOneNote);
router.post("/note",verifyToken, createNewNote);
router.put("/note/:_id", verifyToken, updateOneNote);
router.delete("/note/:_id", verifyToken, deleteOneNote);

module.exports = router;






