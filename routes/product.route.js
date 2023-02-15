const express = require("express");

module.exports = (app) => {
  const products = require("../controllers/product.controller");

  var router = require("express").Router();

  router.get("/", products.findAll);

  router.get("/:id", products.findOne);

  router.post("/", products.create);

  router.put("/:id", products.update);

  router.delete("/:id", products.deleteOne);

  router.delete("/", products.deleteAll);

  app.use("/product", router);
};
