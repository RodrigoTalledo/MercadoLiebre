const express = require('express');
const app = express();

const path = require('path');

const publicPath = path.resolve('public')
app.use(express.static(publicPath));

const puerto = process.env.PORT || 3001;
app.listen (puerto, () =>{
    console.log ('Servidor corriendo en el puerto 3001')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});