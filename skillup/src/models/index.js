const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define:{
    freezeTableName: true,
    timestamps: false
  },
  operatorsAliases: false,
 

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.administrador = require("./administrador.model.js")(sequelize, Sequelize);
db.empresa = require("./empresa.model.js")(sequelize, Sequelize);
db.curso = require("./curso.model.js")(sequelize, Sequelize);
db.estudiante = require("./estudiante.model.js")(sequelize, Sequelize);
db.oferta = require("./oferta.model.js")(sequelize, Sequelize);
db.notificacion = require("./notificacion.model.js")(sequelize, Sequelize);


module.exports = db;