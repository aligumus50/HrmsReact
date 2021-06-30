import axios from "axios";

export default class JobAdvertisementService {

  //dtosuz gelen liste
  getAll(){

    return axios.get("http://localhost:8080/api/jobadvertisements/getall")
  }

  getAllByPageable(pageNo, pageSize){
    return axios.get("http://localhost:8080/api/jobadvertisements/getAllByPage?pageNo="+pageNo+"&pageSize="+pageSize)
  }

  getFindJobAdvertisementByCityId(...id){

    return axios.get("http://localhost:8080/api/jobadvertisements/findJobAdvertisementByCityId?ids="+id+"&")
  }
  getAllByStatus() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getJobAdvertisementDetailsByStatus?status=true"
    );
  }

  getByStatusOrderByCreatedDateAsc() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getJobAdvertisementDetailsByStatusOrderDate?status=true"
    );
  }

  getByStatusAndByEmployeer() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getJobAdvertisementDetailsByStatusAndByEmployeer?employeerId=23&status=false"
    );
  }

  add(jobadvertisement){
    return (axios.post("http://localhost:8080/api/jobadvertisements/add", jobadvertisement))
    
  }

  updateStatusAndEmployeerId(employeerId, id, status){
    return axios.post("http://localhost:8080/api/jobadvertisements/updateStatusAndEmployeerId?employeerId="+employeerId+"&id="+id+"&status="+status)
  }

  getByEmployeerId(id){

    return axios.get("http://localhost:8080/api/jobadvertisements/getByEmployeerId?employeerId="+id)
  }








}
