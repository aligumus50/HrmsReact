import axios from "axios";

export default class EmployeerService {
  getAll() {
    return axios.get("http://localhost:8080/api/employeers/getall");
  }
}
