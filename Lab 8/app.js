console.log("Hola mundo")

// Manejar archivos
const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'hola desde node');