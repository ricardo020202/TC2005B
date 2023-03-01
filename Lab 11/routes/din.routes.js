const express = require('express');
const router = express.Router();
const filesystem = require('fs');

router.get('/ordenar', (request, response, next) => {
    let ordenar = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Ordenar</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <style>
                body {
                    display: flex;
                    min-height: 100vh;
                    flex-direction: column;
                }
                        
                main {
                    flex: 1 0 auto;
                }
            </style>
        </head>
        <body class="grey darken-4 white-text">
            <nav class="#9e9e9e grey">
                <div class="nav-wrapper">
                    <a href="/lab11/" class="brand-logo">M1000r</a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a href="/lab11/">Inicio</a></li>
                        <li><a href="/lab11/preguntas">Preguntas</a></li>
                        <li><a href="/din/ordenar">Ordenar</a></li>
                    </ul>
                </div>
            </nav>
            <main>
                <div class="container">
                    <h1>Ordenar</h1>
                    <form action="/din/ordenar" method="POST">
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="first_name" type="text" class="validate" name="nombre">
                                <label for="first_name">Nombre</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="last_name" type="text" class="validate" name="apellido">
                                <label for="last_name">Apellido</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="email" type="email" class="validate" name="email">
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="password" type="password" class="validate" name="password">
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="direccion" type="text" class="validate" name="direccion">
                                <label for="direccion">Direccion</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="telefono" type="text" class="validate" name="telefono">
                                <label for="telefono">Telefono</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input id="tarjeta" type="text" class="validate" name="tarjeta">
                                <label for="tarjeta">Tarjeta</label>
                            </div>
                            <div class="input-field col s6">
                                <input id="cvv" type="text" class="validate" name="cvv">
                                <label for="cvv">CVV</label>
                            </div>
                        </div>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Reservar
                            <i class="material-icons right">send</i>
                        </button>
                    </form>
                    <br><br>
                </div>
            </main>
            
            <footer class="page-footer #9e9e9e grey">
                <div class="container">
                    <div class="row">
                        <div class="col l5 s12">
                            <h5 class="white-text">M1000r</h5>
                            <p class="grey-text text-lighten-4">Especificaciones tecnicas</p>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Navegacion</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="/lab11/">Inicio</a></li>
                                <li><a class="grey-text text-lighten-3" href="/lab11/preguntas">Preguntas</a></li>
                                <li><a class="grey-text text-lighten-3" href="/din/ordenar">Ordenar</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Editor</h5>
                            <ul>
                                <li><a class="grey-text text-lighten-3" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                            </ul>
                        </div>
                        <div class="col">
                            <h5 class="white-text">Contacto</h5>
                            <ul>
                                <li>José Ricardo Rosales Castañeda</li>
                                <li>A01709449</li>
                                <li><a class="grey-text text-lighten-3" href="mailto:A01709449@tec.mx">A01709449@tec.mx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        © 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </body>
        </html>`;

    response.send(ordenar);
});

router.post('/ordenar', (request, response, next) => {
    let nombre = request.body.nombre;
    let apellido = request.body.apellido;
    let email = request.body.email;
    let password = request.body.password;
    let direccion = request.body.direccion;
    let telefono = request.body.telefono;
    let tarjeta = request.body.tarjeta;
    let cvv = request.body.cvv;
    let orden = `Nombre: ${nombre} ${apellido} \nEmail: ${email} \nPassword: ${password} \nDireccion: ${direccion} \nTelefono: ${telefono} \nTarjeta: ${tarjeta} \nCVV: ${cvv}`;
    filesystem.writeFileSync('orden.txt', orden);


    let order = `
                <html>
                <head>
                    <title>M1000r</title>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                    <style>
                        body {
                            display: flex;
                            min-height: 100vh;
                            flex-direction: column;
                        }
                        
                        main {
                            flex: 1 0 auto;
                        }
                    </style>
                </head>
                <body class="grey darken-4 white-text">
                    <nav>
                        <div class="nav-wrapper #9e9e9e grey">
                            <a href="/lab11/" class="brand-logo">M1000r</a>
                            <ul id="nav-mobile" class="right hide-on-med-and-down">
                                <li><a href="/lab11/">Inicio</a></li>
                                <li><a href="/lab11/preguntas">Preguntas</a></li>
                                <li><a href="/din/ordenar">Ordenar</a></li>
                            </ul>
                        </div>
                    </nav>
                    <main>
                        <div class="container">
                            <h1>Orden realizada</h1>
                            <p>Gracias por su compra</p>
                        </div>
                    </main>
                    <footer class="page-footer #9e9e9e grey">
                    <div class="container">
                        <div class="row">
                            <div class="col l5 s12">
                                <h5 class="white-text">M1000r</h5>
                                <p class="grey-text text-lighten-4">Especificaciones tecnicas</p>
                            </div>
                            <div class="col">
                                <h5 class="white-text">Navegacion</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="/lab11/">Inicio</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/lab11/preguntas">Preguntas</a></li>
                                    <li><a class="grey-text text-lighten-3" href="/din/ordenar">Ordenar</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <h5 class="white-text">Editor</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="https://code.visualstudio.com/">Visual Studio Code</a></li>
                                </ul>
                            </div>
                            <div class="col">
                                <h5 class="white-text">Contacto</h5>
                                <ul>
                                    <li>José Ricardo Rosales Castañeda</li>
                                    <li>A01709449</li>
                                    <li><a class="grey-text text-lighten-3" href="mailto:A01709449@tec.mx">A01709449@tec.mx</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2014 Copyright Text
                            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </body>
            </html>`;

    response.send(order);
});

module.exports = router;