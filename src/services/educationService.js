import axios from "axios";

export default class EducationService{

    getAll(){

        return axios.get("http://localhost:8080/api/educations/getall")
    }

    getByCurriculumVitaeOrderByDate(){

        return axios.get("http://localhost:8080/api/educations/getByCurriculumVitae_IdOrderByEndDateDesc?curriculumvitaeId=6")
    }
}