import axios from "axios";

export default class LangugaeService {
  
    getAll() {
    return axios.get("http://localhost:8080/api/languages/getall");
  }

  getByCurriculumVitae(){

    return axios.get("http://localhost:8080/api/languages/getByCurriculumVitae_Id?curriculumvitaeId=6")
  }
}
