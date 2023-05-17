const db = require("../models");
const Administrador = db.administrador;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create an administrator
  const administrador = {
    id: req.body.id,
    usuario: req.body.usuario,
    password: req.body.password
  };

  // Save in the database
  Administrador.create(administrador)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the administrator."
      });
    });
};

exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.iLike]: `%${id}%` } } : null;
  
    Administrador.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving administrators."
        });
      });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Administrador.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Administrador with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Administrador with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Administrador.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Administrador was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Administrador with id=${id}. Maybe Administrador was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Administrador with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Administrador.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Administrador was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Administrador with id=${id}. Maybe Administrador was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Administrador with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};