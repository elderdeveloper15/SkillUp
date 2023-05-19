const db = require("../models");
const Curso = db.curso;
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
  const curso = {
    id: req.body.id,
    costo: req.body.costo,
    duracion: req.body.duracion,
    modalidad: req.body.modalidad,
    publico: req.body.publico,
    area: req.body.area,
    estatus: req.body.estatus ? req.body.estatus : false,
    date: req.body.date,
    horario: req.body.horario,
    id_empresa: req.body.id_empresa,
    ubicacion: req.body.ubicacion,
    titulo: req.body.titulo
  };

  // Save in the database
  Curso.create(curso)
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
  
    Curso.findAll({ where: condition })
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

  Curso.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Curso with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Curso with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Curso.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Curso was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Curso with id=${id}. Maybe Curso was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Curso with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Curso.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Curso was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Curso with id=${id}. Maybe Curso was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Curso with id=" + id
      });
    });
};

exports.lastID = async (req, res) => {
  try {
    const resultado = await Curso.max('id');
    const ultimoID = parseInt(resultado, 10); // Convertir a número base 10
    res.status(200).json({ ultimoID });
  } catch (error) {
    // Manejar el error según tus necesidades
    console.error('Error al obtener el último ID:', error);
    res.status(500).json({ error: 'Error al obtener el último ID' });
  }
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};