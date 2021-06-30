import axios from "axios";

export default class CurriculumVitaeService {
  add(curriculumvitae) {
    return axios.post(
      "http://localhost:8080/api/curriculumvitaes/add",
      curriculumvitae
    );
  }
  getAll() {
    return axios.get(
      "http://localhost:8080/api/curriculumvitaes/getByCandidateId?candidateId=63"
    );
  }

  getByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/curriculumvitaes/getByCandidateId?candidateId=" +
        candidateId
    );
  }

  getById(curriculumvitaeId) {
    return axios.get(
      "http://localhost:8080/api/curriculumvitaes/getById?curriculumVitaeId=" +
        curriculumvitaeId
    );
  }
}
