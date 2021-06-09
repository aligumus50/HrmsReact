import axios from "axios"

export default class CurriculumVitaeService{
   
  getAll(){

    return axios.get("http://localhost:8080/api/curriculumvitaes/getByCandidateId?candidateId=63");
  }
    
}