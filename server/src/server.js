const express = require("express")
const server = express()
const port = 3020

server.get('/', (req, res) => {
    res.send("Hello")
})


server.listen(port, () => console.log(`https://localhost:${port}`))