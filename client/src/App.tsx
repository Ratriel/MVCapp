import "./App.css";
import React, { useEffect, useState } from "react";
import IApi from "./api/IApi";
import Api from "./api/Api";
import IEmployee from "./models/IEmployee";

// import Employee from "./components/Employee";
// import InputData from "./components/InputData";

export default function App() {
  // Init API
  const [api] = useState<IApi>(new Api());

  // States
  const [data, setData] = useState<Array<IEmployee>>([]);

  // getting main data
  useEffect(() => {
    api.getEmployees().then((data) => setData(data));
  }, [api]);
  console.log(data);

  // adding user
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
