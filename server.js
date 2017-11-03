var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var port = 3000;
var router = require('./server/routes/routes');
var config = "mongodb://localhost:27017/achei"


// app.get('/', function (req, res) {
//     res.send("Hello from Daniel");

// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router)
app.listen(port, function () {
    console.log("serve is ruing");
})


//conexao com o mongo
mongoose.connect(config)
    .connection
    .on('connected', function () {
        console.log("sucesso" + config)
    })
    .on('error', function (err) {
        console.log("sucesso" + err)
    })
