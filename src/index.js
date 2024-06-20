const app = require('./app/app')
const sequelize = require('../src/db/config'); 
const port = process.env.PORT||4000;
require("dotenv").config();

app.listen(port, ()=>
  {
console.log(`Escuchando puerto ${port}`)

console.log(process.env.DB_DATABASE);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_HOST);
console.log(process.env.DB_DIALECT);

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
  } );