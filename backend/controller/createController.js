const createNote = require("../model/createModel");

exports.createNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    const titleExists = await createNote.findOne({ title });

    if (titleExists) {
      return res
        .status(401)
        .json({ success: false, message: "User already exists" });
    }

    await createNote.create({
      title,
      description,
    });

    res.status(201).json({
      success: true,
      message: "Note is created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
