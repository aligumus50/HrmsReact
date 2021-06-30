import axios from "axios";

export default class ExperienceService{

    add(experience){
        return axios.post("http://localhost:8080/api/experiences/add",experience)
    }
    getAll(){

        return axios.get("http://localhost:8080/api/experiences/getall")
    }

    getByCurriculumVitaeOrderByDate(curriculumvitaeId){

        return axios.get("http://localhost:8080/api/experiences/getByCurriculumVitae_IdOrderByEndDateDesc?curriculumvitaeId="+curriculumvitaeId)
    }
}