const db = require('../util/database');

/*const ordenes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        direccion: 'Calle 1',
        telefono: '1234567890',
        email: 'jp@tec.mx',
        password: '1234',
        tarjeta: '1234567890123456',
        cvv: '123',
    },
    {
        nombre: 'Pedro',
        apellido: 'Gomez',
        direccion: 'Calle 2',
        telefono: '0987654321',
        email: 'pg@hotmail.com',
        password: '4321',
        tarjeta: '1234567890123456',
        cvv: '123',
    },
];
*/

module.exports = class Orden {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_orden) {
        this.nombre = mi_orden.nombre || '';
        this.apellido = mi_orden.apellido || '';
        this.direccion = mi_orden.direccion || '';
        this.telefono = mi_orden.telefono || '';
        this.email = mi_orden.email || '';
        this.password = mi_orden.password || '';
        this.tarjeta = mi_orden.tarjeta || '';
        this.cvv = mi_orden.cvv || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO ordenes (nombre, apellido, direccion, telefono, email, password, tarjeta, cvv) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [this.nombre, this.apellido, this.direccion, this.telefono, this.email, this.password, this.tarjeta, this.cvv]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id) {
        let query = `SELECT * FROM ordenes`;
        if (id != 0) {
            query += ' WHERE id = ?'
            return db.execute(query, [id]);
        } 
        return db.execute(query);
    }

}