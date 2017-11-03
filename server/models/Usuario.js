var mongoose = require('mongoose');


var UsuarioSchema = new mongoose.Schema({
    nome: String,
    login: String,
    senha: String,
    CPF: String,
    RG: String,
    endereco: String

});
var usuario = module.exports = mongoose
    .model("usuario", UsuarioSchema);

module.exports.getAllUsuarios = function (callback) {
    usuario.find(callback);
}
module.exports.addUsuario = function (newUsuario, callback) {
    usuario.create(newUsuario, callback);
}
module.exports.updateUsuario = function (id, newUsuario, callback) {
    usuario.findByIdAndUpdate(id, newUsuario, callback);
}
module.exports.deleteUsuario = function (id, callback) {
    usuario.findByIdAndRemove(id, callback);
}
module.exports.getUsuario = function (id, callback) {
    usuario.findById(id, callback);
}