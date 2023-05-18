module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rfc: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      domicilio: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      verificada: {
        type: Sequelize.BOOLEAN 
      }
    },{
      tableName: 'empresa',
      timestamps: false
    });
  
    return Empresa;
  };