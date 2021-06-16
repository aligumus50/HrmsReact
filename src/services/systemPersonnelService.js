import axios from "axios";

export default class SystemPersonnelService {
  getall() {
    return axios.get("http://localhost:8080/api/systempersonnels/getall");
  }

  add(systempersonnel) {

    return axios.post("http://localhost:8080/api/systempersonnels/add",systempersonnel)
  }


}
