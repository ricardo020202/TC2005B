// console.log("Hola mundo")

// // Manejar archivos
// const filesystem = require('fs');

// filesystem.writeFileSync('hola.txt', 'hola desde node');

// setTimeout(() => console.log("check mate"), 15000);

const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("Hola desde node");
    response.end();
});

server.listen(3000);