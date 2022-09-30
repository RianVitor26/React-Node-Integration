const express = require("express");
const server = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const port = 3000;

const musics = ["Te amar demais", "Best part", "Refém", "Barcelona"];

server.get("/api/musics", (req, res) => {
  res.send(musics);
});


  server.use(express.static(path.join(__dirname, "client/dist")));

  server.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html"));
  });


server.listen(port, () => console.log(`http://localhost:${port}`));