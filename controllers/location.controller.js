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

  return User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find user with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          `An error has occurred while retrieving user with id=${id}.`,
      });
    });
};

exports.create = (req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    loginDisabled,
    securityRole,
    lastLogin,
  } = req.body;

  const user = {
    firstName,
    lastName,
    emailAddress,
    password,
    loginDisabled,
    securityRole,
    lastLogin,
  };

  return User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error has occurred while creating user.`,
      });
    });
};

exports.update = (req, res) => {
  const { id } = req.params;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `User ${id} was updated successfully.`,
        });
      } else {
        res.send({
          message: `User ${id} could not be updated.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error has occurred while updating user.`,
      });
    });
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: `User ${id} was deleted successfully.`,
        });
      } else {
        res.send({
          message: `User ${id} could not be deleted.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || `An error has occurred while deleting user.`,
      });
    });
};

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((num) => {
      res.send({ message: `${num} users were deleted successfully.` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || `An error has occurred while deleting all users.`,
      });
    });
};
