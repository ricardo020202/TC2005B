const filesystem = require('fs');
const http = require('http');

// link a proyecto anterior

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("Hola");
    response.end();
})
server.listen(3000);
