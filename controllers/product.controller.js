const db = require("../models");
const Product = db.Product;

exports.findAll = (req, res) => {
  return Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "An error occurred." });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  return Product.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Product with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `An error has occurred while retrieving Product with id=${id}.`,
      });
    });
};

exports.create = (req, res) => {
  const { sku, displayName, quantity, imageUrl, price } = req.body;

  const product = {
    sku,
    displayName,
    quantity,
    imageUrl,
    price,
  };

  return Product.create(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while creating Location.`,
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Product.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Product ${id} was updated successfully.`,
        });
      } else {
        res.send({
          message: `Product ${id} could not be updated.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while updating Location.`,
      });
    });
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;

  Product.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Product ${id} was deleted successfully.`,
        });
      } else {
        res.send({
          message: `Product ${id} could not be deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error has occurred while deleting Product.`,
      });
    });
};

exports.deleteAll = (req, res) => {
  Product.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} Products were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting all Products.`,
      });
    });
};
