const express = require("express");

module.exports = (app) => {
  const users = require("../controllers/location.controller");

  var router = require("express").Router();

  router.get("/", users.findAll);

  router.get("/:id", users.findOne);

  router.post("/", users.create);

  router.put("/:id", users.update);

  router.delete("/:id", users.deleteOne);

  router.delete("/", users.deleteAll);

  app.use("/user", router);
};
