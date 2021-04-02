import { useContext } from "react";
import Context from "../const/Context";
import IEmployee from "../models/IEmployee";

export default function Employees(props: { employees: Array<IEmployee> }) {
  const employees = props.employees;
  const api = useContext(Context);

  return (
    <div>
      {employees.length > 0 ? (
        employees.map((employee) => {
          return (
            <div className="cards" key={employee.id}>
              <h3>Name: {employee.name}</h3>
              <h4>Salary: {employee.salary}</h4>
              <button onClick={async () => {}}>Delete</button>
              <input className="EditSalary" type="text" />
              <button>Update</button>
            </div>
          );
        })
      ) : (
        <div> No Users </div>
      )}
    </div>
  );
}
