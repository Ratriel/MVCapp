import IEmployee from "../models/IEmployee";
import IApi from "./IApi";
export default class Api implements IApi {
  async getEmployees(): Promise<Array<IEmployee>> {
    return [];
  }
  async delEmployee(id: string): Promise<void> {}
  async addEmployee(employee: IEmployee): Promise<void> {}
}
