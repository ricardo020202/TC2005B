const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => {
    console.log(request.body);
    let html = `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <title>Lab 1</title>
        
            <style>
                img {
                    width: 350px;
                }
            </style>
        </head>
        
        <body class="grey darken-4 white-text">
            <header>
                <nav class="#9e9e9e grey">
                    <div class="nav-wrapper">
                        <a href="/" class="brand-logo">M1000r</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/preguntas">Preguntas</a></li>
                            <li><a href="/ordenar">Ordenar</a></li>
                        </ul>
                    </div>
                </nav>
                <h2 style="display: flex; justify-content: center; font-size: 50px;">BMW M1000R 2023</h2>
            </header>
        
            <div id="content">
                <table style="display: flex; justify-content: center;">
                    <tbody>
                        <tr>
                            <td><img src="./assets/m1000r.jpg" alt="M1000R"></td>
                            <td><img src="./assets/m1000r-wheelie.jpg" alt="M1000R wheelie"></td>
                            <td><img src="./assets/m1000r-curve.jpg" alt="M1000R curve"></td>
                        </tr>
                        <tr>
                            <td><img src="./assets/m1000r-white.jpeg" alt="M1000R-white"></td>
                            <td><img src="./assets/m1000r-burningTyre.webp" alt="M1000R burning tyre"></td>
                            <td><img src="./assets/m1000r-side.webp" alt="M1000R duo"></td>
                        </tr>
                    </tbody>
                </table>
        
                <h2 style="display: flex; justify-content: center;">Especificaciones técnicas</h2>
                <table style="display: flex; justify-content: center;" class="highlight">
                    <tbody>
                        <tr>
                            <td>
                                <h3>Motor y transmisión</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Cilindrada:</td>
                            <td>999cc</td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td>4T</td>
                        </tr>
                        <tr>
                            <td>Disposición:</td>
                            <td>En línea</td>
                        </tr>
                        <tr>
                            <td>Distribución:</td>
                            <td>DOHC, doble árbol de levas y distribución variable BMW ShiftCam</td>
                        </tr>
                        <tr>
                            <td>Cilindros:</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Válvulas:</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Alimentacion:</td>
                            <td>Inyección electrónica con cuerpos de mariposa de 48 mm</td>
                        </tr>
                        <tr>
                            <td>Refrigeración:</td>
                            <td>agua</td>
                        </tr>
                        <tr>
                            <td>Potencia:</td>
                            <td>210 CV a 13,500 rpm</td>
                        </tr>
                        <tr>
                            <td>Par:</td>
                            <td>113 Nm a 11,000 rpm</td>
                        </tr>
                        <tr>
                            <td>Batería:</td>
                            <td>12V/5Ah</td>
                        </tr>
                        <tr>
                            <td>Clutch:</td>
                            <td>Multidisco antirebote mecánico</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Chasis</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td>Doble viga de aluminio de motor autoportante</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Suspension</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td>Hidráulica invertida(Delantera) / Doble brazo(Trasera)</td>
                        </tr>
                        <tr>
                            <td>Diámetro:</td>
                            <td>45 mm(Delantera)</td>
                        </tr>
                        <tr>
                            <td>Recorrido:</td>
                            <td>120 mm(Delantera) / 117 mm(Trasera)</td>
                        </tr>
                        <tr>
                            <td>Regulaciones:</td>
                            <td>Extensión, carga y precarga(Ambas)</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Frenos</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Modelo:</td>
                            <td>M(Ambos)</td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td>Disco(Ambos)</td>
                        </tr>
                        <tr>
                            <td>Diámetro:</td>
                            <td>320 mm(Delantero) / 220 mm(Trasero)</td>
                        </tr>
                        <tr>
                            <td>Pistones:</td>
                            <td>4(Delantero) / 1(Trasero)</td>
                        </tr>
                        <tr>
                            <td>
                                <h3>Llantas</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td>Radial sin cámara(Ambos)</td>
                        </tr>
                        <tr>
                            <td>Diámetro:</td>
                            <td>17"(Ambos)</td>
                        </tr>
                        <tr>
                            <td>Medidas:</td>
                            <td>120/70 ZR 17(Delantera) / 190/55 ZR 17(Trasera)</td>
                        </tr>
                        <tr>
                            <td>Material rin:</td>
                            <td>Aluminio(Ambos)</td>
                        </tr>
                    </tbody>
                </table>
                <br><br>
            </div>
        
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
                                <li><a class="grey-text text-lighten-3" href="/">Inicio</a></li>
                                <li><a class="grey-text text-lighten-3" href="/preguntas">Preguntas</a></li>
                                <li><a class="grey-text text-lighten-3" href="/ordenar">Ordenar</a></li>
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
        response.send(html);
});

module.exports = router;