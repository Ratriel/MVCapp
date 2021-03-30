import { promises } from "node:dns";
import IEmployee from "../models/IEmployee";

export default interface IApi {
  getEmployees(): Promise<Array<IEmployee>>;
  getEmployee(id: number): Promise<void>;
  addEmployee(employee: IEmployee): Promise<void>;
  delEmployee(id: number): Promise<void>;
}
