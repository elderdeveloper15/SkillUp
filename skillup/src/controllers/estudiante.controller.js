const db = require("../models");
const Estudiante = db.estudiante;
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
  const estudiante = {
    id: req.body.id,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    correo: req.body.correo,
    escolaridad: req.body.escolaridad,
    habilidades: req.body.habilidades,
    password: req.body.password,
    cv: req.body.cv
  };

  // Save in the database
  Estudiante.create(estudiante)
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
  
    Estudiante.findAll({ where: condition })
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

  Estudiante.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Estudiante with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Estudiante with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Estudiante.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Estudiante was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Estudiante with id=${id}. Maybe Estudiante was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Estudiante with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Estudiante.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Estudiante was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Estudiante with id=${id}. Maybe Estudiante was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Estudiante with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};