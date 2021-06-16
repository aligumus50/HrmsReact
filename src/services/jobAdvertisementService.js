import axios from "axios";

export default class JobAdvertisementService {
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


}
