const Note = require("../model/createModel");

exports.searchController = async (req, res) => {
  try {
    const filter = { title: req.query.title };

    console.log(filter);

    const note = await Note.find(filter);

    if (!note || note.length == 0) {
      return res.status(401).json({
        message: "Note not exist",
      });
    }

    const result = note;

    res.status(200).json({
      success: true,
      result,
      message: "Search Result",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
