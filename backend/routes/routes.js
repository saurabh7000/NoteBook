const express = require("express");
const { createNote } = require("../controller/createController");
const { updateController } = require("../controller/updateController");
const { deleteController } = require("../controller/deleteController");
const { route } = require("../app");
const { getAllNotes } = require("../controller/getAllNotes");
const { cardDetails } = require("../controller/getCardDetails");
const { searchController } = require("../controller/searchController");
const router = express.Router();

router.route("/create").post(createNote);

router.route("/update/:id").put(updateController);

router.route("/delete/:id").delete(deleteController);

router.route("/getAllNotes").get(getAllNotes);
router.route("/cardDetails/:id").get(cardDetails);
router.route("/search").get(searchController);

module.exports = router;
