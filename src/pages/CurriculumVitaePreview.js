import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  Header,
  Icon,
  Item,
  Menu,
  Rail,
  Segment,
} from "semantic-ui-react";
import CurriculumVitaeService from "../services/curriculumVitaeService";
import "../css/curriculumVitaePreview.css";
import moment from "moment";

export default function CurriculumVitaePreview() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  let { id } = useParams();
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();

    curriculumVitaeService
      .getByCandidateId(id)
      .then((result) => setCurriculumVitaes(result.data.data));
  }, [id]);

  return (
    <div>
      <Segment placeholder>
        <Grid style={{ backGroundColor: "white" }}>
          <Grid.Row></Grid.Row>
          <Grid.Column width={5}>
            <Menu pointing vertical fluid>
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
            </Menu>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment.Group horizontal>
              <Segment floated="left">
                <Rail
                  attached
                  internal
                  position="left"
                  style={{ floated: "left" }}
                >
                  <Header style={{ marginLeft: "4px", marginTop: "4px" }}>
                    Özgeçmişler
                  </Header>
                </Rail>
              </Segment>
              <Segment
                style={{
                  right: "0",
                  floated: "right",
                  textAlign: "right",
                }}
              >
                <Rail
                  attached
                  internal
                  position="right"
                  style={{
                    marginRight: "4px",
                    marginTop: "4px",
                    textAlign: "right",
                  }}
                >
                  <span className="addnewcvbtn">
                    <Icon name="add"></Icon>Yeni Özgeçmiş Oluştur
                  </span>
                </Rail>
              </Segment>
            </Segment.Group>
            {curriculumVitaes.map((curriculumVitae) => (
              <Segment>
                <Item.Group divided>
                  <Item>
                    <Item.Image className="itemprofilphoto"
                      circular
                      size="tiny"
                      src={curriculumVitae.profilePhotoLink}
                    />

                    <Item.Content>
                      <Item.Header>
                        {curriculumVitae.candidate.firstName}{" "}
                        {curriculumVitae.candidate.lastName}
                      </Item.Header>

                      <Item.Description>
                        {curriculumVitae.candidate.emailAddress}
                      </Item.Description>
                      <Item.Description>
                        {" "}
                        {moment(curriculumVitae.createdDate).format(
                          "DD MMMM YYYY"
                        )}
                      </Item.Description>
                      <Item.Extra>
                        <Button
                          floated="right"
                          as={NavLink}
                          to={`/candidate/${id}/curriculumVitae/${curriculumVitae.id}`} 
                        >
                         
                          <Icon name="ellipsis vertical" />
                          Özgeçmiş Görüntüle
                        </Button>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
            ))}
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
