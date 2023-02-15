const express = require("express");

module.exports = (app) => {
  const tickets = require("../controllers/ticket.controller");

  var router = require("express").Router();

  router.get("/", tickets.findAll);

  router.get("/:id", tickets.findOne);

  router.post("/", tickets.create);

  router.put("/:id", tickets.update);

  router.delete("/:id", tickets.deleteOne);

  router.delete("/", tickets.deleteAll);

  app.use("/ticket", router);
};
