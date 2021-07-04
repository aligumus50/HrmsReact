import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Grid,
  Icon,
  Label,
  List,
  Segment,
} from "semantic-ui-react";
import EmployeerProfileStatusService from "../services/employeerProfileStatusService";
import EmployeerService from "../services/employeerService";

export default function EmployeerProfileStatusVerification() {
  
  let employeerProfileStatusService = new EmployeerProfileStatusService();
  let employeerService = new EmployeerService();
  
  const employeerProfileStatus = useSelector((state) => state.employeerProfileStatus);

  let { id } = useParams();

  console.log(employeerProfileStatus)
 const handleConfirmProfile=(id,status,systempersonnelId,employeerId)=>{

    employeerProfileStatusService.updateStatusBySytemPersonnel(id,status,systempersonnelId).then(result=>console.log(result.data.message))
  
    employeerService.confirmUpdate(employeerId).then(result=>console.log(result.data.message));

    console.log(id,status,systempersonnelId,employeerId)
 }
  return (
    <div>
      <Segment>
        <Grid celled columns="equal">
          <Grid.Row>
            <Grid.Column>
              <Label as="a" color="red" ribbon>
                Mevcut Bilgiler
              </Label>
              <List divided selection>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="building" size="large" />
                    {employeerProfileStatus.employeer?.companyName}
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="internet explorer" size="large" />
                    {employeerProfileStatus.employeer?.webSiteAddress}
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="mail" size="large" />
                    {employeerProfileStatus.employeer?.emailAddress}
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="call" size="large" />
                    {employeerProfileStatus.employeer?.telNumber}
                  </Label>
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Label as="a" color="red" ribbon>
                Değiştirilmek İstenen Bilgiler
              </Label>
              <List divided selection>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="building" size="large" />
                    {employeerProfileStatus.employeer.updateProfile?.companyName}
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="internet explorer" size="large" />
                    {
                      employeerProfileStatus.employeer.updateProfile?.webSiteAddress
                    }
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="mail" size="large" />
                    {
                      employeerProfileStatus.employeer.updateProfile?.emailAddress
                    }
                  </Label>
                </List.Item>
                <List.Item>
                  <Label as="a" image horizontal>
                    <Icon name="call" size="large" />
                    {employeerProfileStatus.employeer.updateProfile?.telNumber}
                  </Label>
                </List.Item>
              </List>
              <Card.Content extra>
                <div className="ui two buttons">
                   <Button basic color="green" onClick={()=>handleConfirmProfile(employeerProfileStatus.id,true,id,employeerProfileStatus.employeer.id)}>
                    Onayla
                  </Button> 
                  <Button
                    basic
                    color="red"
                    as={NavLink}
                    to={`/systempersonnel/${id}/employeerprofilestatus`}
                  >
                    Reddet
                  </Button>
                </div>
              </Card.Content>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
