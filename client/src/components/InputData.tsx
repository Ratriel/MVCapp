import "../App.css";
import React, { useContext, useState } from "react";
import IApi from "../api/IApi";
import Context from "../const/Context";
import IEmployee from "../models/IEmployee";

interface Iprops {
  getData?: () => void;
}

const InputData = (props: Iprops) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  // Get API from Context
  const api = useContext<IApi>(Context);

  // interfaz

  return (
    <div>
      <div className="GetHigh">
        <label>Nombre:</label>
        <input
          className="GetHighInput"
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Salario:</label>
        <input
          className="GetHighInput"
          type="text"
          name="salary"
          value={salary}
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <button
          onClick={async () => {
            const employee: IEmployee = {
              name: name,
              salary: salary,
            } as any;
            api.addEmployee?.(employee);
            props.getData?.();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default InputData;
