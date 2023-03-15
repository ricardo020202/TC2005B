exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/lab18/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};