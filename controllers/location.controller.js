const db = require("../models");
const Location = db.Location;

exports.findAll = (req, res) => {
  return Location.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "An error occurred." });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;

  return Location.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Location with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `An error has occurred while retrieving Location with id=${id}.`,
      });
    });
};

exports.create = (req, res) => {
  const { name, displayName, streetAddress, city, zipCode, state, country } =
    req.body;

  const location = {
    name,
    displayName,
    streetAddress,
    city,
    zipCode,
    state,
    country,
  };

  return Location.create(location)
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

  Location.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Location ${id} was updated successfully.`,
        });
      } else {
        res.send({
          message: `Location ${id} could not be updated.`,
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

  Location.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `Location ${id} was deleted successfully.`,
        });
      } else {
        res.send({
          message: `Location ${id} could not be deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting Location.`,
      });
    });
};

exports.deleteAll = (req, res) => {
  Location.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} Locations were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting all Locations.`,
      });
    });
};
