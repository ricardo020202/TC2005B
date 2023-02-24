const filesystem = require('fs');

// Arreglo de numeros
let arreglo = [1,2,3,4,5,6,7,8,9,10];
function promedioArreglo(arreglo){
    let elementos = 0, suma = 0, promedio;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
        elementos++;
    }
    promedio = suma/elementos;

    return promedio;
}
console.log(promedioArreglo(arreglo));

// Recibir archivo string y escrbirlo en un .txt
let texto = "Hola mundo";
function escritura(texto){
    filesystem.writeFileSync("output.txt", texto);
}
escritura(texto);

// Problema propio


const http = require('http');

// link a proyecto anterior
filesystem.readFile("../Lab 1/index.html",  function (err, html) {
    if (err) {
        throw err; 
    }
    const server = http.createServer((request, response) => {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(html);
        response.end();
    })
    server.listen(3000);
});