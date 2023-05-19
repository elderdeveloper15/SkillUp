const db = require("../models");
const Oferta = db.oferta;
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
  const oferta = {
    id: req.body.id,
    sueldo: req.body.sueldo,
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
  Oferta.create(oferta)
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
  
    Oferta.findAll({ where: condition })
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

  Oferta.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Oferta with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Oferta with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Oferta.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Oferta was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Oferta with id=${id}. Maybe Oferta was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Oferta with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Oferta.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Oferta was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Oferta with id=${id}. Maybe Oferta was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Oferta with id=" + id
      });
    });
};

exports.lastID = async (req, res) => {
  try {
    const resultado = await Oferta.max('id');
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