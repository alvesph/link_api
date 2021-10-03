const express = require('express');
const routes = require('./routes/routes');
const app = express();
app.use(express.json());
app.use(routes)

const port = process.env.PORT || 3333;

require('./configs/database');
require('dotenv/config');


app.listen(app.get("port"), () => {
console.log(`Round One on http://localhost:${port}`)
});