import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService"

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
    
    let jobPositionService = new JobPositionService()
    //jobpositionservice deki getall i çalıştır.
    //Başarılı olursa gelecek sonuç için(result);
    //axios result.data dönderiyor bizim data dışında axios onu da data dönderiyor o zaman success message da dönderir.
    jobPositionService.getAll().then(result=>setJobPositions(result.data.data))

  }, []);

  return (
    <div>
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>PositionName</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobpositions.map((jobposition) => (
            <Table.Row key={jobposition.id}>
              <Table.Cell>{jobposition.positionName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
