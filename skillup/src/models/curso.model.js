module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      costo: {
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
      }
    },{
      tableName: 'curso',
      timestamps: false
    });
  
    return Curso;
  };