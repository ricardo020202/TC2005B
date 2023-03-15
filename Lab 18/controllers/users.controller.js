const user = require('../models/users.model');
const bcrypt = require('bcryptjs');

exports.get_signup = (request, response, next) => {
    response.render('signUp', {
        titulo: 'Sign up',
        isLoggedIn: request.session.isLoggedIn || false,
        user: request.session.user || '',
    });
};

exports.post_signup = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save()
    .then(([rows, fieldData]) => {
        
        request.session.mensaje = "Usuario registrado.";

        response.redirect('/users/login');
    })
    .catch((error) => console.log(error));
    
};

exports.login = (request, response, next) => {
    let mensaje = '';
    if (request.session.mensaje) {
        mensaje = request.session.mensaje;
        request.session.mensaje = '';
    }

    response.render('login', {
        titulo: 'Login',
        isLoggedIn: request.session.isLoggedIn || false,
        user: request.session.user || '',
        mensaje: mensaje,
    });
}

exports.post_login = (request, response, next) => {
    user.fetch(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length > 0) {
            bcrypt.compare(request.body.password, rows[0].password)
            .then((doMatch) => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.user = rows[0].username;
                    response.redirect('/lab18/');
                } else {
                    request.session.mensaje = "Usuario y/o contraseña incorrecta.";
                    response.redirect('/users/login');
                    console.log(rows);
                }
            })
            .catch((error) => {console.log(error)});
        } else {
            request.session.mensaje = "Usuario no registrado.";
            response.redirect('/users/login');
        }
    }).catch((error) => console.log(error));
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};