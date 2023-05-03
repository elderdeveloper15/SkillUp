module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "dorados",
    DB: "DB SkillUp",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };