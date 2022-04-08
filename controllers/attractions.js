const express = require("express");
const router = express.Router();
const Attraction = require("../models/attractions");

router.get("/", async (req, res) => {
  try {
    const AllAttractions = await Attraction.find({});
    const context = { Attraction: AllAttractions };
    res.render("index", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const singleAttraction = await Attraction.findById(id);
    const context = { Attraction: singleAttraction };
    res.render("attraction", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
