const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const lab11Routes = require('./routes/lab11.routes');
app.use('/lab11',lab11Routes);

app.use((request, response, next) => {
    response.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);