const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
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
                        <a href="/lab11/" class="brand-logo">M1000r</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="/lab11/">Inicio</a></li>
                            <li><a href="/lab11/preguntas">Preguntas</a></li>
                            <li><a href="/din/ordenar">Ordenar</a></li>
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
        
                <h2 style="display: flex; justify-content: center;">Especificaciones t??cnicas</h2>
                <table style="display: flex; justify-content: center;" class="highlight">
                    <tbody>
                        <tr>
                            <td>
                                <h3>Motor y transmisi??n</h3>
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
                            <td>Disposici??n:</td>
                            <td>En l??nea</td>
                        </tr>
                        <tr>
                            <td>Distribuci??n:</td>
                            <td>DOHC, doble ??rbol de levas y distribuci??n variable BMW ShiftCam</td>
                        </tr>
                        <tr>
                            <td>Cilindros:</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>V??lvulas:</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Alimentacion:</td>
                            <td>Inyecci??n electr??nica con cuerpos de mariposa de 48 mm</td>
                        </tr>
                        <tr>
                            <td>Refrigeraci??n:</td>
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
                            <td>Bater??a:</td>
                            <td>12V/5Ah</td>
                        </tr>
                        <tr>
                            <td>Clutch:</td>
                            <td>Multidisco antirebote mec??nico</td>
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
                            <td>Hidr??ulica invertida(Delantera) / Doble brazo(Trasera)</td>
                        </tr>
                        <tr>
                            <td>Di??metro:</td>
                            <td>45 mm(Delantera)</td>
                        </tr>
                        <tr>
                            <td>Recorrido:</td>
                            <td>120 mm(Delantera) / 117 mm(Trasera)</td>
                        </tr>
                        <tr>
                            <td>Regulaciones:</td>
                            <td>Extensi??n, carga y precarga(Ambas)</td>
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
                            <td>Di??metro:</td>
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
                            <td>Radial sin c??mara(Ambos)</td>
                        </tr>
                        <tr>
                            <td>Di??metro:</td>
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
                                <li>Jos?? Ricardo Rosales Casta??eda</li>
                                <li>A01709449</li>
                                <li><a class="grey-text text-lighten-3" href="mailto:A01709449@tec.mx">A01709449@tec.mx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        ?? 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </body>
        
        </html>`;
    response.send(html);
});

router.get('/preguntas', (request, response) => {
    let preguntas = `
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
            <title>Preguntas</title>
        </head>
        <body class="grey darken-4 white-text">
            <header>
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
                <h2 style="display: flex; justify-content: center; font-size: 50px;">Preguntas</h2>
            </header>
        
            <div id="content" class"container">
                <ul>
                    <li>??Cu??l es la diferencia entre Internet y la World Wide Web?
                        <ul>
                            <li>El internet es una red de computadoras que funcionan como nodos que se conectan entre si, mientras que la www es un subdominio que sirve como una especie de almacen de p??ginas y aplicaciones web</li>
                        </ul>
                    </li>
                    <li>??Cu??les son las partes de un URL?
                        <ul>
                            <li>Protocolo, subdominio, dominio, extensi??n, carpeta, recurso y par??metros</li>
                        </ul>
                    </li>
                    <li>??Cu??l es el prop??sito de los m??todos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE?
                        <ul>
                            <li>GET: Consultar datos</li>
                            <li>HEAD: Conultar los headers de las requests</li>
                            <li>POST: Enviar datos</li>
                            <li>PUT: Cambiar o actualizar datos</li>
                            <li>PATCH: Cambios parciales</li>
                            <li>DELETE: Borrar datos</li>
                        </ul>
                    </li>
                    <li>??Qu?? m??todo HTTP se debe utilizar al enviar un formulario HTML, por ejemplo cuando ingresas tu usuario y contrase??a en alg??n sitio? ??Por qu???
                        <ul>
                            <li>
                                Si es para registrar cuenta se utiliza un post, mientras que para iniciar sesion se utiliza get 
                            </li>
                        </ul>
                    </li>
                    <li>??Qu?? m??todo HTTP se utiliza cuando a trav??s de un navegador web se accede a una p??gina a trav??s de un URL?
                        <ul>
                            <li>GET</li>
                        </ul>
                    </li>
                    <li>Un servidor web devuelve una respuesta HTTP con c??digo 200. ??Qu?? significa esto? ??Ocurri?? alg??n error?
                        <ul>
                            <li>C??digo 200 siginifica que todo ocurrio de la manera esperada</li>
                        </ul>
                    </li>
                    <li>??Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intent?? acceder al sitio y se encontr?? con un error 404? ??Por qu???
                        <ul>
                            <li>No, ya que el error 404 significa recurso no encontrado, por lo que puede que el usuario haya escrito mal la url o que la pagina a la que quiere acceder ya no exista</li>
                        </ul>
                    </li>
                    <li>??Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intent?? acceder al sitio y se encontr?? con un error 500? ??Por qu???
                        <ul>
                            <li>Si, ya que el codigo 500 siginifica error interno del servidor, es decir que algo de la parte del servidor no esta funcionande de la manera adecuada</li>
                        </ul>
                    </li>
                    <li>??Qu?? significa que un atributo HTML5 est?? depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 est??n desaprobados.
                        <ul>
                            <li>Que ya no tiene soporte en la versiones mas recientes de html y que aun puedes llegar a utilizar pero no se recomienda, como type, scope, "u" y strike</li>
                        </ul>
                    </li>
                    <li>??Cu??les son las diferencias principales entre HTML 4 y HTML5?
                        <ul>
                            <li>
                                HTML5 es el conunto de diferentes tecnologias como CSS y JS, mientras que HTML4 es solo HTML
                            </li>
                        </ul>
                    </li>
                    <li>??Qu?? componentes de estructura y estilo tiene una tabla?
                        <ul>
                            <li>TABLE: Inicializa la tabla</li>
                            <li>TR: La filas de la tabla</li>
                            <li>TH: Encabezados de la tabla</li>
                            <li>TD: Casillas de la tabla</li>
                            <li>En HTML5 Se introdujeron las etiquetas de thead, tbody y tfoot</li>
                        </ul>
                    </li>
                    <li>??Cu??les son los principales controles de una forma HTML5?
                        <ul>
                            <li>
                                Inputs, que pueden ser desde texto, checkbox, selectores, radios y los botones
                            </li>
                        </ul>
                    </li>
                    <li>??Qu?? tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar la siguiente p??gina para descubrirlo:<a href="http://html5test.com/" target="_blank">http://html5test.com/</a> (Al responder la pregunta recuerda poner el navegador que utilizas)
                        <ul>
                            <li>
                                En navegador chrome 473 de 555 puntos
                            </li>
                        </ul>
                    </li>
                    <li><strong>Sobre el ciclo de vida y desarrollo de los sistemas de informaci??n:</strong>
                        <ul>
                            <li>??Cu??l es el ciclo de vida de los sistemas de informaci??n?</li>
                            <li><img src="./assets/ciclo.jpg" alt="" style="width: 400px;"></li>
                        </ul>
                    </li>
                </ul>
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
                                <li>Jos?? Ricardo Rosales Casta??eda</li>
                                <li>A01709449</li>
                                <li><a class="grey-text text-lighten-3" href="mailto:A01709449@tec.mx">A01709449@tec.mx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container">
                        ?? 2014 Copyright Text
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>
        </body>
        </html>`;

    response.send(preguntas);
});

router.get('/galeria', (request, response) => {

});

module.exports = router;