const express = require("express");
const router = express.Router();
const mysqlConnection = require("../dataBase");

//get all

router.get("/employee/", (req, res) => {
  mysqlConnection.query("SELECT * FROM employees", (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

//get by ID

router.get("/employee/:id", (req, res) => {
  const { id } = req.params;
  mysqlConnection.query(
    "SELECT * FROM employees WHERE id =?",
    [id],
    (err, rows, fields) => {
      if (!err) {
        res.json(rows[0]);
      } else {
        console.log(err);
      }
    }
  );
});

// delete request

router.delete("/employee/delete/:id", (req, res) => {
  const id = req.params.id;

  mysqlConnection.query(
    "DELETE FROM employees WHERE id = ?",
    id,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ Status: "Empleado Eliminado" });
      }
    }
  );
});

// insert a new employee

router.post("/employee/", (req, res) => {
  const name = req.body.name;
  const salary = req.body.salary;
  const id = req.body.id;
  const query = "INSERT INTO employees (id, name, salary) VALUES (?, ?, ?)";
  mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
    if (!err) {
      res.json({ Status: "Empleado agregado" });
    } else {
      console.log(err);
    }
  });
});

// insert, con proceso almacenado

/*
router.post('/employee/', (req, res)=>{
    const {name, salary} = req.body;
    const query = `CALL INSERTDATA(?, ?)`;
    mysqlConnection.query(query, [name, salary] , (err, rows, fields)=>{
        if(!err){
            res.json({Status: "Empleado agregado"});
        }else{
            console.log(err);
        }
    })
})

*/

module.exports = router;
