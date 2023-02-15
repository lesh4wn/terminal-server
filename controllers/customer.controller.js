const db = require("../models");
const Customer = db.Customer;

exports.findAll = (req, res) => {
  return Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "An error occurred." });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  return Customer.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Customer with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `An error has occurred while retrieving Customer with id=${id}.`,
      });
    });
};

exports.create = (req, res) => {
  const { firstName, lastName, emailAddress, phoneNumber } = req.body;

  const customer = {
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
  };

  return Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while creating Customer.`,
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  Customer.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Customer ${id} was updated successfully.`,
        });
      } else {
        res.send({
          message: `Customer ${id} could not be updated.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while updating Customer.`,
      });
    });
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;

  Customer.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Customer ${id} was deleted successfully.`,
        });
      } else {
        res.send({
          message: `Customer ${id} could not be deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting Customer.`,
      });
    });
};

exports.deleteAll = (req, res) => {
  Customer.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} Customers were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting all Customers.`,
      });
    });
};
