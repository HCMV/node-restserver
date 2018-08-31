require('./config/config');


const colors = require('colors');
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false); // quita deprecation warnings
const path = require('path');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//configuración global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, autoIndex: false }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos Online'.green);

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`);
});