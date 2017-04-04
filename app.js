const express = require("express");
const app = express();

// Rota: /hello
app.get('/hello', (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

module.exports = app;