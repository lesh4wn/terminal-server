const db = require("../models");
const Ticket = db.Ticket;

exports.findAll = (req, res) => {
  return Ticket.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "An error occurred." });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  return Ticket.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Ticket with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `An error has occurred while retrieving Ticket with id=${id}.`,
      });
    });
};

exports.create = (req, res) => {
  const { sku, displayName, quantity, imageUrl, price } = req.body;

  const ticket = {
    sku,
    displayName,
    quantity,
    imageUrl,
    price,
  };

  return Ticket.create(ticket)
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

  Ticket.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Ticket ${id} was updated successfully.`,
        });
      } else {
        res.send({
          message: `Ticket ${id} could not be updated.`,
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

  Ticket.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Ticket ${id} was deleted successfully.`,
        });
      } else {
        res.send({
          message: `Ticket ${id} could not be deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error has occurred while deleting Ticket.`,
      });
    });
};

exports.deleteAll = (req, res) => {
  Ticket.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} Tickets were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting all Tickets.`,
      });
    });
};
