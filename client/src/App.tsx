import React from "react";
import "./App.css";

// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import Employee from "./components/Employee";
// import InputData from "./components/InputData";

function App() {
  // // States
  // const [data, setData] = useState([]);

  // // getting main data
  // useEffect(() => {
  //   Axios.get("http://localhost:8000/employee").then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }, []);

  // // adding user
  // const AddEmployee = (employee) => {
  //   Axios.post("http://localhost:8000/employee", {
  //     name: employee.name,
  //     salary: employee.salary,
  //   }).then(setData([...data, employee]));

  //   console.log(
  //     "Employee: ",
  //     employee.name,
  //     " with Salary of",
  //     employee.salary,
  //     ", has been added"
  //   );
  // };

  // // Delete employee
  // const DeleteEmployee = (id) => {
  //   Axios.delete(`http://localhost:8000/employee/delete/${id}`).then(
  //     setData(
  //       data.filter((employee) => {
  //         return (employee.id !== id);
  //       })
  //     )
  //   );
  // };

  // Update employe

  //Render
  return (
    <div>
      {
        <h2>CRUD Template</h2>
        /*

       
      <InputData    AddEmployee=  {AddEmployee}  />
     <Employee DeleteEmployee={DeleteEmployee} Data={data} /> 
     */
      }
    </div>
  );
}

export default App;
