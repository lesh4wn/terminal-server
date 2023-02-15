const express = require("express");

module.exports = (app) => {
  const locations = require("../controllers/location.controller");

  var router = require("express").Router();

  router.get("/", locations.findAll);

  router.get("/:id", locations.findOne);

  router.post("/", locations.create);

  router.put("/:id", locations.update);

  router.delete("/:id", locations.deleteOne);

  router.delete("/", locations.deleteAll);

  app.use("/location", router);
};
