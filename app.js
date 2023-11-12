const express = require("express"); //requerimos el modulo de express
const app = express();//app es mi servidor
const port = 3000;
const path = require('path');

// Configurar Express para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'archivos')));
//
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//routes
app.use('/API/pokemon',require('./routes/pokemon'));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
