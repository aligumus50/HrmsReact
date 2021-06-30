import axios from "axios";

export default class LangugaeService {
  
  add(language){
    return axios.post("http://localhost:8080/api/languages/add",language)
  }
    getAll() {
    return axios.get("http://localhost:8080/api/languages/getall");
  }

  getByCurriculumVitae(curriculumvitaeId){

    return axios.get("http://localhost:8080/api/languages/getByCurriculumVitae_Id?curriculumvitaeId="+curriculumvitaeId)
  }
}
