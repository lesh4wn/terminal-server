const express = require("express"),
  router = express.Router(),
  userController = require("../controllers/user.controller.js");

router.get("/", userController.hello);

module.exports = router;
