const { Sequelize} = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize(
  process.env.DB_DATABASE || "sgidb",
  process.env.DB_USERNAME || "root",
  process.env.DB_PASSWORD || null,
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
    // Ajustar los tiempos de espera
    dialectOptions: {
      connectTimeout: 60000, // 60 segundos
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
