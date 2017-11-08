'use strict';
const express = require('express');
const app = express();

//importacao das dependencias
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const port = 3000;
const router = require('./server/routes/routes');
const config = "mongodb://localhost:27017/achei"

// http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
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
