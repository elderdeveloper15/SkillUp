module.exports = (sequelize, Sequelize) => {
    const Notificacion = sequelize.define("notificacion", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_empresa: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      id_estudiante: {
        type: Sequelize.INTEGER
      },
      id_curso: {
        type: Sequelize.INTEGER
      },
      id_oferta: {
        type: Sequelize.INTEGER
      }
    },{
      tableName: 'notificacion',
      timestamps: false
    });
  
    return Notificacion;
  };