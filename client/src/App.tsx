import "./App.css";
import React, { useEffect, useState } from "react";
import IApi from "./api/IApi";
import Api from "./api/Api";
import IEmployee from "./models/IEmployee";
import Context from "./const/Context";
import Employees from "./components/Employees";
import Employee from "./components/Employee";
import InputData from "./components/InputData";

export default function App() {
  // Init API
  const [api] = useState<IApi>(new Api());

  // States
  const [data, setData] = useState<Array<IEmployee>>([]);

  // Get Data
  useEffect(() => {
    getData();
  }, [api]);

  const getData = () => api.getEmployees().then((data) => setData(data));

  //Render
  return (
    // Set API to Context
    <Context.Provider value={api}>
      <div>
        <h2>CRUD Template</h2>
        <InputData getData={() => getData()} />
        <Employee />
        <Employees employees={data} getData={() => getData()} />
      </div>
    </Context.Provider>
  );
}
