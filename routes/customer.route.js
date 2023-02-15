const express = require("express");

module.exports = (app) => {
  const customers = require("../controllers/customer.controller");

  var router = require("express").Router();

  router.get("/", customers.findAll);

  router.get("/:id", customers.findOne);

  router.post("/", customers.create);

  router.put("/:id", customers.update);

  router.delete("/:id", customers.deleteOne);

  router.delete("/", customers.deleteAll);

  app.use("/customer", router);
};
