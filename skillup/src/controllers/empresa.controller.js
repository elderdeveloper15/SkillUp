const db = require("../models");
const Empresa = db.empresa;
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
  const empresa = {
    id: req.body.id,
    rfc: req.body.rfc,
    password: req.body.password,
    nombre: req.body.nombre,
    domicilio: req.body.domicilio,
    correo: req.body.correo,
    telefono: req.body.telefono,
    verificada: req.body.estatus ? req.body.estatus : false
  };

  // Save in the database
  Empresa.create(empresa)
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
  
    Empresa.findAll({ where: condition })
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

  Empresa.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find x Empresa with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error xretrieving Empresa with id=" + id
      });
    });
};

exports.findNotVerified = (req,res) =>{
  Empresa.findAll({ where: { verificada: false } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Empresa."
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Empresa.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Empresa was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Empresa with id=${id}. Maybe Empresa was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Empresa with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Empresa.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Empresa was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Empresa with id=${id}. Maybe Empresa was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Empresa with id=" + id
      });
    });
};

exports.lastID = async (req, res) => {
  try {
    const resultado = await Empresa.max('id');
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