const app = require('./app/app')
const sequelize = require('../src/db/config'); 
const port = process.env.PORT||4000;

app.listen(port, ()=>
  {
console.log(`Escuchando puerto ${port}`)
sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida exitosamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
  } );