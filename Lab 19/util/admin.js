module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('eliminar_ordenes') >= 0)) {
        return response.redirect('/lab19/');
    }
    next();
}