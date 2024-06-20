const { Sequelize} = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize(
  process.env.MYSQL_DATABASE || "sgidb",
  process.env.MYSQLUSER || "root",
  process.env.MYSQLPASSWORD || null,
  {
    host: process.env.MYSQLHOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
    port: process.env.MYSQLPORT|| 13715
  }
); 