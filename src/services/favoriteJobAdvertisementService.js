import axios from "axios";


export default class FavoriteJobAdvertisementService{

    getAll(){

        return axios.get("http://localhost:8080/api/favoritejobadvertisements/getall")
    }

    add(favoritejobadvertisement){

        return axios.post("http://localhost:8080/api/favoritejobadvertisements/add",favoritejobadvertisement)
    }

    delete(jobAdvertisementId,candidateId){

        return axios.post("http://localhost:8080/api/favoritejobadvertisements/delete?candidateId="+candidateId+"&jobAdvertisementId="+jobAdvertisementId)
    }
}