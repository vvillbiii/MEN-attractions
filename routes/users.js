const express = require("express");
const router = express.Router();

//importing usesr routes
const { register, login } = require("../controllers/user");

router.route("/register").get(register);
router.route("/login").get(login);

module.exports = router;
