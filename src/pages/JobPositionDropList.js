import React, { useState, useEffect } from "react";
import { Dropdown} from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  //state = jobpositions
  //distructor işlemi yapılıyor burada.
  //useState bize bir nesne dönderiyor ve biz onu distructor ediyoruz.
  //Dönen yapıda bir data bir de fonksiyon dönüyor.
  //jobpostionts diye bir datam var default yani başlangıç değeri boş bir array.
  //setjobpositions değiştirmek içinde jobpositionsı kullanıyoruz.
  //jobpositions hook bilgisidir.
  //kurulan bu yapı reactın yaşam döngüsüne müdahale etmemizi sağlıyor.
  const [jobpositions, setJobPositions] = useState([]);

  //component yüklendiğinde yapılması istenen kod buraya yazılır.
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    //jobpositionservice deki getall i çalıştır.
    //Başarılı olursa gelecek sonuç için(result);
    //axios result.data dönderiyor bizim data dışında axios onu da data dönderiyor o zaman success message da dönderir.
    jobPositionService
      .getAll()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const options = 
      jobpositions.map(jobposition=>(
          { key: jobposition.id, text: jobposition.positionName, value: jobposition.id }
      ))
    

  return (
    <div>
      <Dropdown
        button
        className="icon"
        floating
        labeled
        icon="world"
        search
        text="Select Language"
        options={options}
      >
      </Dropdown>
    </div>
  );
}
