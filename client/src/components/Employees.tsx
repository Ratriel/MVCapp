import { useContext } from "react";
import Context from "../const/Context";
import IEmployee from "../models/IEmployee";

interface Iprops {
  employees: Array<IEmployee>;
  getData?: () => void;
}

export default function Employees(props: Iprops) {
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
              <button
                onClick={async () => {
                  await api.delEmployee(employee.id as number);
                  props.getData?.();
                }}
              >
                Delete
              </button>
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
