import "./App.css";
import React, { useEffect, useState } from "react";
import IApi from "./api/IApi";
import Api from "./api/Api";
import IEmployee from "./models/IEmployee";
import Context from "./const/Context";
import Employees from "./components/Employees";
import Employee from "./components/Employee";

export default function App() {
  // Init API
  const [api] = useState<IApi>(new Api());

  // States
  const [data, setData] = useState<Array<IEmployee>>([]);

  // Get Data
  useEffect(() => {
    api.getEmployees().then((data) => setData(data));
  }, [api]);

  //Render
  console.log("Render");
  return (
    <Context.Provider value={api}>
      <div>
        <h2>CRUD Template</h2>
        <Employee />
        <Employees employees={data} />

        {/* <InputData AddEmployee={AddEmployee} /> */}
      </div>
    </Context.Provider>
  );
}
