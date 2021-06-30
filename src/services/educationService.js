import axios from "axios";

export default class EducationService{

    getAll(){

        return axios.get("http://localhost:8080/api/educations/getall")
    }

    add(education){

        return axios.post("http://localhost:8080/api/educations/add",education)

    }

    getByCurriculumVitaeOrderByDate(curriculumvitaeId){

        return axios.get("http://localhost:8080/api/educations/getByCurriculumVitae_IdOrderByEndDateDesc?curriculumvitaeId="+curriculumvitaeId)
    }
}