import React, { useEffect, useState } from "react";
import { NavLink ,useParams} from "react-router-dom";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import moment from "moment";


export default function EmployeerJobAdvertisementList(props) {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  let jobAdvertisementService = new JobAdvertisementService();
  //rootdaki parametreleri obje olarak bana use params veriyor. react router domdan geliyor.
  //parametre 1den fazla olsada veriyor ama obje olarak.
  //distructor ediyoruz obje geldiği için.
  //let{id,jobpositionId} birden fazla varsa.
  let {id} = useParams()

  console.log("id: " + id)


  useEffect(() => {
    

    jobAdvertisementService.getByEmployeerId(id).then((result) => setJobAdvertisements(result.data.data));
  }, [id]);

    
  const handleStatusJobAdvertisement = (id,jobAdvertisementId,status) => {
    
    jobAdvertisementService.updateStatusAndEmployeerId(id,jobAdvertisementId,status)
    .then(result=>console.log(result.data.message)) 

  };



  console.log("id: " + id + "adver: " + jobAdvertisements.id)

  return (
    <div>

    
      <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Position Name</Table.HeaderCell>
            <Table.HeaderCell>Number Of Open Position</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Application Last Date</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell as={NavLink} to="/employeer/:id">
                {jobAdvertisement.employeer.companyName}
              </Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.positionName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>
                {moment(jobAdvertisement.createdDate).format("Do MMMM YYYY")}
              </Table.Cell>
              <Table.Cell>
                {moment(jobAdvertisement.applicationLastDate).format(
                  "Do MMMM YYYY"
                )}
              </Table.Cell>
              <Table.Cell>
                  <Button onClick={()=>handleStatusJobAdvertisement(jobAdvertisement.id,id,true)}>Aktif</Button>
                  <Button onClick={()=>handleStatusJobAdvertisement(jobAdvertisement.id,id,false)}>Pasif</Button>
              </Table.Cell>
      
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
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
