const Note = require("../model/createModel");

exports.cardDetails = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    res.status(200).json({
      success: true,
      note,
      message: "Note Details has been successfully fetched",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
