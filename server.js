const express = require('express');
const bodyParser = require('body-parser');
//swagger
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

// crear una variable que represente a la libreria express
const app = express();

// Configuración del puerto del servidor
const port = process.env.PORT || 5000;

// analizar solicitudes
app.use(bodyParser.urlencoded({ extended: true }))

// analizar solicitudes de tipo json
app.use(bodyParser.json())

// definir una ruta raíz
app.get('/', (req, res) => {
  res.send("PruebaTecnica Muta");
});

// Requerir rutas de Materiales
const materialRoutes = require('./src/rutas/rutasMateriales')

// Requerir rutas de las recolecciones
const recolRoutes = require('./src/rutas/rutasRecolecciones')


// middleware
app.use('/', materialRoutes)
app.use('/', recolRoutes)

// escucha las solicitudes
app.listen(port, () => {
  console.log(`Server activo en el puerto ${port}`);
});