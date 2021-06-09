import axios from "axios";

export default class CandidateService {
  getall() {
    return axios.get("http://localhost:8080/api/candidates/getall");
  }
}
