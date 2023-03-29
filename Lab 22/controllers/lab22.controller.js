const orden = require('../models/ordenes.model');

exports.get_index = (request, response, next) => {
    response.render('index', {
        titulo: 'M1000R Ficha tecnica',
        user: request.session.user || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });

};

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
        user: request.session.user || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.get_ordenar = (request, response, next) => {
    response.render('ordenar', {
        titulo: 'Ordenar',
        user: request.session.user || '',
        isLoggedIn: request.session.isLoggedIn || false,
        csrfToken: request.csrfToken(),
    });
};

exports.post_ordenar = (request, response, next) => {
    const id = request.params.id || 0;
    const orden_nueva = new orden({
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        direccion: request.body.direccion,
        telefono: request.body.telefono,
        email: request.body.email,
        password: request.body.password,
        tarjeta: request.body.tarjeta,
        cvv: request.body.cvv,
        user: request.session.user || '',
    });
    orden_nueva.save(id);
    response.status(300).redirect('/lab22/ordenes');
};

exports.get_ordenes = (request, response, next) => {
    const id = request.params.id || 0;
    orden.fetch(id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('ordenes', {
            titulo: 'Ordenes',
            ordenes: rows,
            user: request.session.user || '',
            isLoggedIn: request.session.isLoggedIn || false,
            privilegios: request.session.privilegios || [],
        });
    }).catch(err => console.log(err));
};

exports.get_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    orden.fetch(id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('modificar', {
            titulo: 'Modificar',
            ordenes: rows,
            orden: rows[0],
            user: request.session.user || '',
            isLoggedIn: request.session.isLoggedIn || false,
            csrfToken: request.csrfToken(),
        });
    }).catch(err => console.log(err));
};

exports.post_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    const orden_nueva = new orden({
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        direccion: request.body.direccion,
        telefono: request.body.telefono,
        email: request.body.email,
        password: request.body.password,
        tarjeta: request.body.tarjeta,
        cvv: request.body.cvv,
        user: request.session.user || '',
    });
    orden_nueva.save(id);
    response.status(300).redirect('/lab22/ordenes');
};

exports.get_admin = (request, response, next) => {
    response.render('admin', {
        titulo: 'Admin',
        user: request.session.user || '',
        isLoggedIn: request.session.isLoggedIn || false,
        csrfToken: request.csrfToken(),
    });
}