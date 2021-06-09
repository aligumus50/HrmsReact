import axios from "axios";

export default class JobPositionService{
   
    //getAll metotu yazıp içerisinde promiseini kullanabileceğimiz halde return ediyoruz.
    //get, post işlemleri axios ile yapılıyor.
    getAll(){

        //get içerisine servisin adresi(endpoint) yazılır.
        //apideki yani restful servise request atma işlemidir.
        return axios.get("http://localhost:8080/api/jobpositions/getall")

    }
}