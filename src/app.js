const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 3333;

require('./configs/connection');
require('dotenv/config');

const routes = require('./routes/routes');

app.use('/bling', routes)

app.listen(3000, () => {
  console.log('Round One');
})