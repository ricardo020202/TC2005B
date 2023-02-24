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

// Bubble sort
let arreglo2 = [10,9,8,7,6,5,4,3,2,1];
function bubbleSort(arreglo){
    let aux;
    for (let i = 0; i < arreglo.length; i++){
        for (let j = 0; j < arreglo.length; j++){
            if (arreglo[j] > arreglo[j+1]){
                aux = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = aux;
            }
        }
    }
    return arreglo;
}
console.log(bubbleSort(arreglo2));

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