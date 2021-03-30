import IEmployee from "../models/IEmployee";
import IApi from "./IApi";
import Axios from "axios";
import axios from "axios";
export default class Api implements IApi {
  async getEmployees(): Promise<Array<IEmployee>> {
    const res = await Axios.get("http://localhost:8000/employee");
    return res.data;
  }
  async getEmployee(id: number): Promise<void> {
    const res = await axios.get(`http://localhost:8000/employee/${id}`);
    return res.data;

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
  }
  async delEmployee(id: number): Promise<void> {}
  async addEmployee(employee: IEmployee): Promise<void> {}
}
