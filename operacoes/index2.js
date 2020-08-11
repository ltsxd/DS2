const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(péracaoRoutes);

app.listen(port, () => {
    console.log('Running in port '+port)

})