const db = require("../models");
const Notificacion = db.notificacion;
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
  const notificacion = {
    id: req.body.id,
    id_empresa: req.body.id_empresa,
    descripcion: req.body.descripcion,
    id_estudiante: req.body.id_estudiante,
    id_curso: req.body.id_curso,
    id_oferta: req.body.id_oferta
  };

  // Save in the database
  Notificacion.create(notificacion)
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
  
    Notificacion.findAll({ where: condition })
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

  Notificacion.findByPk(id)
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

  Notificacion.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Notificacion was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Notificacion with id=${id}. Maybe Notificacion was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Notificacion with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Notificacion.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Notificacion was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Notificacion with id=${id}. Maybe Notificacion was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Notificacion with id=" + id
      });
    });
};

exports.lastID = async (req, res) => {
  try {
    const resultado = await Notificacion.max('id');
    const ultimoID = parseInt(resultado, 10); // Convertir a número base 10
    res.status(200).json({ ultimoID });
  } catch (error) {
    // Manejar el error según tus necesidades
    console.error('Error al obtener el último ID:', error);
    res.status(500).json({ error: 'Error al obtener el último ID' });
  }
};

exports.findAllByIdOrTitle = async (req,res) =>{
  const { id_empresa, titulo } = req.query;
  let whereCondition = {};

  if (id_empresa && titulo) {
    whereCondition = {
      [Op.and]: [
        { id_empresa: id_empresa },
        { titulo: { [Op.like]: `%${titulo}%` } }
      ]
    };
  } else if (id_empresa) {
    whereCondition = { id_empresa: id_empresa };
  } else if (titulo) {
    whereCondition = { titulo: { [Op.like]: `%${titulo}%` } };
  }

  try {
    const elementos = await Notificacion.findAll({
      where: whereCondition
    });

    res.status(200).json(elementos);
  } catch (error) {
    console.error('Error al obtener los elementos por ID o título:', error);
    res.status(500).json({ error: 'Error al obtener los elementos por ID o título' });
  }
};

exports.deleteAll = (req, res) => {
  
};

exports.findAllPublished = (req, res) => {
  
};