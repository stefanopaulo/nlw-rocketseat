const express = require("express")
const server = express()

// configurar pasta public
server.use(express.static("public"))

// configurar os caminhos da minha aplicação
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

// ligar o servidor
server.listen(3000)