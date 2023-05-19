module.exports = (sequelize, Sequelize) => {
    const Oferta = sequelize.define("oferta", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sueldo: {
        type: Sequelize.INTEGER
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      modalidad: {
        type: Sequelize.STRING
      },
      publico: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      },
      estatus: {
        type: Sequelize.BOOLEAN
      },
      date: {
        type: Sequelize.DATE
      },
      horario: {
        type: Sequelize.STRING
      },
      id_empresa:{
        type: Sequelize.INTEGER
      },
      ubicacion:{
        type: Sequelize.STRING
      },
      titulo:{
        type: Sequelize.STRING
      }
    },{
      tableName: 'oferta',
      timestamps: false
    });
  
    return Oferta;
  };