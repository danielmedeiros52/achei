var mongoose = require('mongoose');
var empShchema = new mongoose.Schema({
    nome: String,
    position: String,
    department: String,
    salary: String

});
var employee = module.exports = mongoose
    .model("employee", empShchema);

module.exports.getallEmployees = function (callback) {
    employee.find(callback);
}
module.exports.addEmployees = function (newEmployee, callback) {
    employee.create(newEmployee, callback);
}
module.exports.updateEmployees = function (id, newEmployee, callback) {
    employee.findByIdAndUpdate(id, newEmployee, callback);
}
module.exports.deleteEmployees = function (id, callback) {
    employee.findByIdAndRemove(id, callback);
}
module.exports.getEmployees = function (id, callback) {
    employee.findById(id, callback);
}