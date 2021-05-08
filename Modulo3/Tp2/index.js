// Crear un formulario de registración con los siguientes datos: nombre, apellido, edad, número de
// celular, país de nacimiento, país de residencia.
// Recibir los datos en el servidor y armar otra página de respuesta que incluya los datos del usuario
// y un enlace a la página de registración nuevamente
'use strict'

const PORT = process.env.PORT || 3005;

var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

const cabecera = `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <style>
            * {
                font-size: 16px;
            }
            
            h2 {
                text-align: center;
                font-weight: bold;
            }
            
            body {
                font-family: 'Lato', sans-serif;
                background-color: #F46A24;
                color:#fff
            }
            
            .formulario {
                width: 40%;
                margin: 10vh auto;
            }
            
            label {
                font-weight: bold;
            }
        </style>
        <title>TP2 - Formulario con nodejs</title>
    </head>
    <body>
    <h2 class="mt-2">Trabajo práctico N°2</h2>
    <div class="formulario">
    `
const cierre = `
    </div>
    </body>
    </html>
    `


app.get('/form', function(req,res){
    res.sendFile('/public/index.html', {root:__dirname});
})

app.post('/datos', function(req,res){
    const { nombre, apellido, celular, paisNac, paisResi } = req.body
    res.send(
        `
        ${cabecera}
        Bienvenido ${nombre} ${apellido}, tu celular es ${celular}. Tu pais de nacimiento es ${paisNac} y resides en ${paisResi} <br>
        <a class="btn btn-success" href="/">Ir a registrarse </a>
        ${cierre}
        `
        )
});

app.listen(PORT, function() {
    console.log('App desde el puerto ' + PORT);
})