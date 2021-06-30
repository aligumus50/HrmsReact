import axios from "axios";


export default class StudyDeparmentService{

    getAll(){

        return axios.get("http://localhost:8080/api/studydepartments/getall")
    }
}