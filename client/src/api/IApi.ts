import IEmployee from "../models/IEmployee";

export default interface IApi {
  getEmployees(): Promise<Array<IEmployee>>;
  delEmployee(id: number): Promise<void>;
  addEmployee(employee: IEmployee): Promise<void>;
}
