var express = require('express');
var router = express.Router();
var Employee = require('./model');

router.get('/', function (req, res) {
    Employee.getallEmployees(function (err, employees) {
        if (err) throw err;
        res.json(employees);

    });

});


router.post('/', function (req, res) {
    var newEmployee = {
        nome: req.body.nome,
        position: req.body.position,
        department: req.body.department,
        salary: req.body.salary
    }

    Employee.addEmployees(newEmployee, function (err, employee) {
        if (err) throw err;
        res.json(employee);

    });

});
router.put('/:_id', function (req, res) {

    var update = {
        nome: req.body.nome,
        position: req.body.position,
        department: req.body.department,
        salary: req.body.salary
    }
    Employee.updateEmployees(req.params._id, update, function (err, employee) {
        if (err) throw err;
        res.json(employee);

    });

})
router.delete('/:_id', function (req, res) {
    Employee.deleteEmployees(req.params._id,  function (err, employee) {
        if (err) throw err;
        res.json(employee);

    });

})
router.get('/:_id', function (req, res) {
    Employee.getEmployees(req.params._id, function (err, employee) {
        if (err) throw err;
        res.json(employee);

    });

})


module.exports = router;