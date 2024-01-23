const createNote = require("../model/createModel");

exports.updateController = async (req, res) => {
  try {
    const note = await createNote.findById(req.params.id);

    if (!note) {
      return res.status(401).json({
        message: "Note not exist",
      });
    }

    note.title = req.body.title;
    note.description = req.body.description;

    await note.save();

    res.status(201).json({
      success: true,
      message: "Note has been updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
