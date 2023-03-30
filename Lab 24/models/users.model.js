const db = require('../util/database');
const bcrypt = require('bcryptjs');

//const users = [];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
        this.imagen = user.imagen || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            return db.execute('INSERT INTO users (username, password, imagen) VALUES (?, ?, ?)',
                [this.username, this.password, this.imagen]);
        });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(username) {
        return db.execute('SELECT * FROM users WHERE username = ?', [username]);
    }

    static getPrivilegios(username) {
        return db.execute(`
            SELECT p.nombre
            FROM privilegios p, rol_privilegio rp, roles r, usuario_rol ur, users u
            WHERE u.username = ? AND u.id = ur.idUsuario AND ur.idRol = r.id
                AND rp.idRol = r.id AND rp.idPrivilegio = p.id        
        `, [username]);
    }
}