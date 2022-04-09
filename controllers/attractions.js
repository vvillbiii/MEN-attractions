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

router.get("/:id/edit", async (req, res) => {
  const id = req.params.id;
  try {
    const editAttraction = await Attraction.findById(id);
    const context = { Attraction: editAttraction };
    res.render("editAttraction", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updateAttraction = await Attraction.findByIdAndUpdate(id, body);
    res.redirect(`/attractions/${updateAttraction._id}`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.delete(":id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteAttraction = await Attraction.findByIdAndDelete(id);
    res.redirect("/attractions");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

router.get("/new", (req, res) => {
  res.render("newAttraction");
});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newAttraction = await Attraction.create(body);
    res.redirect("/attractions");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});

module.exports = router;
