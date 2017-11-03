var express = require('express');
var router = express.Router();
var Usuario = require('../models/Usuario');

router.get('/usuarios', function (req, res) {
    Usuario.getAllUsuarios(function (err, Usuarios) {
        if (err) throw err;
        res.json(Usuarios);

    });

});


router.post('/', function (req, res) {
    var newUsuario = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
        CPF: req.body.CPF,
        RG: req.body.RG,
        endereco: req.body.endereco
    }

    Usuario.addUsuarios(newUsuario, function (err, usuario) {
        if (err) throw err;
        res.json(usuario);

    });

});
router.put('/:_id', function (req, res) {

    var update = {
        nome: req.body.nome,
        login: req.body.login,
        senha: req.body.senha,
        CPF: req.body.CPF,
        RG: req.body.RG,
        endereco: req.body.endereco
    }
    Usuario.updateUsuarios(req.params._id, update, function (err, usuario) {
        if (err) throw err;
        res.json(usuario);

    });

})
router.delete('/:_id', function (req, res) {
    Usuario.deleteUsuarios(req.params._id,  function (err, usuario) {
        if (err) throw err;
        res.json(usuario);

    });

})
router.get('/:_id', function (req, res) {
    Usuario.getUsuarios(req.params._id, function (err, usuario) {
        if (err) throw err;
        res.json(usuario);

    });

})


module.exports = router;