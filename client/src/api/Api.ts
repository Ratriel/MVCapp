import IEmployee from "../models/IEmployee";
import IApi from "./IApi";
import Axios from "axios";
export default class Api implements IApi {
  async getEmployees(): Promise<Array<IEmployee>> {
    const res = await Axios.get("http://localhost:8000/employee");
    return res.data;
  }
  async delEmployee(id: number): Promise<void> {}
  async addEmployee(employee: IEmployee): Promise<void> {}
}
