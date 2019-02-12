const express = require('express');
const bodyParser = require('body-parser');
const utils = require('./config/utils');
const app = express();
const port = utils.port;
const publicRoot = './dist';
const mongo = require('./config/database');
const conect = new mongo();
const quiz = require("./router/quiz");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(publicRoot))

app.get("/", (req, res) => {  
    //res.sendFile("index.html", { root: publicRoot })
    res.send('index');
});

app.use("/quiz", quiz);

app.listen(port);
console.log("Listen on Port "+port)