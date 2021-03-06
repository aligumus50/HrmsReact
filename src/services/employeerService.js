import axios from "axios";

export default class EmployeerService {
  getAll() {
    return axios.get("http://localhost:8080/api/employeers/getall");
  }

  add(employeer) {
    return axios.post("http://localhost:8080/api/employeers/add",employeer);
  }

  getById(employeerId){
    return axios.get("http://localhost:8080/api/employeers/getById?employeerId="+employeerId)
  }

  update(employeer){
    return axios.post("http://localhost:8080/api/employeers/update",employeer)
  }

  confirmUpdate(employeerId){
    return axios.post("http://localhost:8080/api/employeers/confirmUpdate?employeerId="+employeerId)
  }
}
