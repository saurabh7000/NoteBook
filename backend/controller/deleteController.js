const createNote = require("../model/createModel");

exports.deleteController = async (req, res) => {
  try {
    const note = await createNote.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      success: true,
      message: "Note Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
