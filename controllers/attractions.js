const Attraction = require("../models/attractions");

// get all attractions => /attractions
exports.getAttractions = async (req, res, next) => {
  try {
    const AllAttractions = await Attraction.find({});
    const context = { Attraction: AllAttractions };
    res.render("index", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
};

//put the new route and post route before the id
//new attraction route => /attractions/new
exports.newAttraction = async (req, res, next) => {
  res.render("newAttraction");
};

// create new attraction post controller => /attractions
exports.createAttraction = async (req, res, next) => {
  const body = req.body;
  try {
    const newAttraction = await Attraction.create(body);
    res.redirect("/attractions");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
};

//get single attraction => /attractions/:id
exports.getAttraction = async (req, res, next) => {
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
};

//update one attraction => /attractions/:id/edit
exports.editAttraction = async (req, res, next) => {
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
};

//update attraction => /attractions/:id
exports.updateAttraction = async (req, res, next) => {
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
};

//delete attraction => /attractions/:id
exports.deleteAttraction = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deleteAttraction = await Attraction.findByIdAndDelete(id);
    res.redirect("/attractions");
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
};
