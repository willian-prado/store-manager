require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./controller/products/router');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`API is online on PORT ${PORT}`);
});