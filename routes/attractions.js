const express = require("express");
const router = express.Router();

//importing attractions controllers
const {
  getAttractions,
  newAttraction,
  createAttraction,
  getAttraction,
  editAttraction,
  updateAttraction,
  deleteAttraction,
} = require("../controllers/attractions");

router.route("/").get(getAttractions);
router.route("/new").get(newAttraction);
router.route("/").post(createAttraction);
router.route("/:id").get(getAttraction);
router.route("/:id/edit").get(editAttraction);
router.route("/:id").put(updateAttraction);
router.route("/:id").delete(deleteAttraction);

module.exports = router;
