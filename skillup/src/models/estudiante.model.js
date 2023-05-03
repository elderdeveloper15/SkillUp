module.exports = (sequelize, Sequelize) => {
    const Estudiante = sequelize.define("estudiante", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      escolaridad: {
        type: Sequelize.STRING
      },
      habilidades: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      cv: {
        type: Sequelize.BLOB
      }
    },{
      tableName: 'estudiante',
      timestamps: false
    });
  
    return Estudiante;
  };