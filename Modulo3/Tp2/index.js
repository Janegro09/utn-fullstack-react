// Crear un formulario de registración con los siguientes datos: nombre, apellido, edad, número de
// celular, país de nacimiento, país de residencia.
// Recibir los datos en el servidor y armar otra página de respuesta que incluya los datos del usuario
// y un enlace a la página de registración nuevamente
'use strict'

const PORT = 3005;

var express = require('express');
var app = express();
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
            }
            body {
                font-family: 'Lato', sans-serif;
            }
            .formulario {
                width: 40%;
                margin: 10vh auto;
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
const formulario = `
    <form method="POST" action="/">
    <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" name="nombre" required>
    </div>
    <div class="mb-3">
    <label for="apellido" class="form-label">Apellido</label>
    <input type="text" class="form-control" name="apellido" required>
    </div>
    <div class="mb-3">
    <label for="celular" class="form-label">Número de celular</label>
    <input type="number" class="form-control" name="celular" required>
    </div>  
    <div class="mb-3">
    <label for="paisNac" class="form-label">Pais de nacimiento</label>
    <input type="text" class="form-control" name="paisNac" required>
    </div>
    <div class="mb-3">
    <label for="paisResi" class="form-label">Pais de residencia</label>
    <input type="text" class="form-control" name="paisResi" required>
    </div>

    <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
`

app.get('/', function(req,res){
    res.send(`
    ${cabecera}
    ${formulario}
    ${cierre}
    `);
})

app.post('/', function(req,res){
    const { nombre, apellido, celular, paisNac, paisResi } = req.body
    res.send(
        `
        ${cabecera}
        Bienvenido ${nombre} ${apellido}, tu celular es ${celular}. Tu pais de nacimiento es ${paisNac} y recides en ${paisResi} <br>
        <a href="/">Ir a registrarse </a>
        ${cierre}
        `
        )
});

app.listen(PORT, function() {
    console.log('App desde el puerto ' + PORT);
})