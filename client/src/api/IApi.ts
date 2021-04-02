import IEmployee from "../models/IEmployee";

export default interface IApi {
  getEmployees(): Promise<Array<IEmployee>>;
  getEmployee(id: number): Promise<IEmployee>;
  addEmployee(employee: IEmployee): Promise<void>;
  delEmployee(id: number): Promise<void>;
}
