const db = require('../util/database');
const bcrypt = require('bcryptjs');

//const users = [];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
        .then((hashedPassword) => {
            this.password = hashedPassword;
            return db.execute('INSERT INTO users (username, password) VALUES (?, ?)',
                [this.username, this.password]);
        });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(username) {
        return db.execute('SELECT * FROM users WHERE username = ?', [username]);
    }
}