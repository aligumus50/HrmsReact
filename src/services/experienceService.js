import axios from "axios";

export default class ExperienceService{

    getAll(){

        return axios.get("http://localhost:8080/api/experiences/getall")
    }

    getByCurriculumVitaeOrderByDate(){

        return axios.get("http://localhost:8080/api/experiences/getByCurriculumVitae_IdOrderByEndDateDesc?curriculumvitaeId=6")
    }
}