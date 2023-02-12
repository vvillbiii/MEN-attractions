const User = require("../models/user");

exports.register = (req, res, next) => {
  res.render("register");
};

exports.login = (req, res, next) => {
  res.render("login");
};
