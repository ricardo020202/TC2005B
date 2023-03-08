const users = [
    {
        username: 'admin',
        password: 'admin',
    },
];

module.exports = class Users {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(user) {
        this.username = user.username || '';
        this.password = user.password || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        users.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return users;
    }

}