const express = require('express');
const cors = require('corss');

const app = express();

const router = require('./src/routes');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log("Teste 3000");
});