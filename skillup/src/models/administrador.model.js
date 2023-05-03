module.exports = (sequelize, Sequelize) => {
    const Administrador = sequelize.define("administrador", {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }

    },{
      tableName: 'administrador',
      timestamps: false
    });
  
    return Administrador;
  };