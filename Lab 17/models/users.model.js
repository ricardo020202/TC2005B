const db = require('../util/database');

//const users = [];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO users (username, password) VALUES (?, ?)',
            [this.username, this.password]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM users');
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetch(id){
        let query = 'SELECT * FROM users';
        if (id != 0) {
            query += ' WHERE id = ?';
            return db.execute(query, [id]);
        }
        return db.execute(query);
    }
}