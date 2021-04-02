import IEmployee from "../models/IEmployee";
import { useContext, useState } from "react";
import Context from "../const/Context";
import IApi from "../api/IApi";
import Employees from "./Employees";

export default function Employee() {
  // Get API from Context
  const api = useContext<IApi>(Context);

  // States
  const [id, setID] = useState<number>(0);
  const [employee, setEmployee] = useState<IEmployee>({
    id: 0,
    name: "",
    salary: "",
  });

  //Render
  return (
    <div>
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setID(Number(`${e.target.value}`))}
      />
      <button
        onClick={async () => {
          const employee = await api.getEmployee(id);
          setEmployee(employee);
        }}
      >
        Get Employee by ID
      </button>
      <Employees employees={[employee]} />
    </div>
  );
}
