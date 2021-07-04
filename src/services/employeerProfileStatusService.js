import axios from "axios";

export default class EmployeerProfileStatusService {

  getAll() {
    return axios.get("http://localhost:8080/api/employeerProfileStatuses/getall");
  }

  getTopByEmployeer_IdOrderByIdDesc(employeerId){

    return axios.get("http://localhost:8080/api/employeerProfileStatuses/getTopByEmployeer_IdOrderByIdDesc?employeerId="+employeerId)
  }

  updateStatusBySytemPersonnel(id,status,systemPersonnelId){
    return axios.post("http://localhost:8080/api/employeerProfileStatuses/updateStatusBySytemPersonnel?id="+id+"&status="+status+"&systemPersonnelId="+systemPersonnelId)
  }

  getByStatus(status){
    return axios.get("http://localhost:8080/api/employeerProfileStatuses/getByStatus?status="+status)
  }
  

}