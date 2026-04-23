const express = require('express');

const servidor = express();

//Criando o nosso endpoint
servidor.get("/hello", (req, res) => {
    res.send("Servidor do Caio")
})

servidor.listen(3000, () => {
    console.log("Servidor na porta 3000 tá funfando")
})