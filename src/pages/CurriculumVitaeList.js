import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Grid,
  Image,
} from "semantic-ui-react";
import CurriculumVitaeService from "../services/curriculumVitaeService";
import "../css/curriculumvitae.css";
import moment from "moment";
import "moment/locale/tr";
import "../css/curriculumVitaeList.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import updateToCurriculumVitae from "../store/actions/curriculumVitaeActions"
import isEditedCurriculumVitaeUpdatePage from "../store/actions/curriculumVitaeUpdatePageActions"

export default function CurriculumVitae({ edit }) {
  const [curriculumVitae, setcurriculumVitae] = useState();

  let {id} = useParams();

  const dispatch = useDispatch()

  

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getById(id)
      .then((result) => setcurriculumVitae(result.data.data));
  }, []);

  const handleUpdateToCurriculumVitae=(curriculumVitae)=>{
    dispatch(updateToCurriculumVitae(curriculumVitae))
  }

  const handleEditCurriculumVitae=(status)=>{
    dispatch(isEditedCurriculumVitaeUpdatePage(status))
  }
  
  return (
    <div>
      <Card color="orange" className="cvprofilecard" fluid>
        <Card.Content
          header="Profil Bilgisi"
          className="cvheadertittle"
        ></Card.Content>
        <Grid className="cvprofilecardgrid">
          <Grid.Row>
            <Grid.Column width="2">
              <Card.Content>
                <Image
                  circular
                  floated="left"
                  size="medium"
                  src={curriculumVitae?.profilePhotoLink}
                />
              </Card.Content>
            </Grid.Column>
            <Grid.Column width="14">
              <Card fluid className="contentcard">
                <Card.Content className="cvprofilecontentname">
                  {curriculumVitae?.candidate.firstName}
                  {curriculumVitae?.candidate.lastName}
                </Card.Content>

                <Card.Content className="cvprofilecontent">
                  <Card.Meta>Açıklama</Card.Meta>
                  {curriculumVitae?.explanation}
                </Card.Content>
                <Card.Content description className="cvprofilecontent">
                  <Card.Meta>Oluşturulma Tarihi</Card.Meta>
                  {moment(curriculumVitae?.createdDate).format("Do MMMM YYYY")}
                </Card.Content>
                <Card.Content className="cvprofilecontent">
                  <Card.Meta>E-Posta Adresi</Card.Meta>
                  {curriculumVitae?.candidate.emailAddress}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Card.Content extra>
          <Button primary  floated="right" onClick={()=>{handleUpdateToCurriculumVitae(curriculumVitae);handleEditCurriculumVitae(false)}}>
            Düzenle
          </Button>
        </Card.Content>
      </Card>

      {/*<Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>Profil Bilgisi</span>
            </div>
          </Grid.Row>
          {curriculumVitaes.map((curriculumVitae) => (
            <Grid.Row>
              <Grid.Column width={1}>
                <Image
                  className="cvphoto"
                  src="https://res.cloudinary.com/dkydco7ta/image/upload/v1622822257/cky2nq8cb7owq2bj7k7n.png"
                />
              </Grid.Column>
              <Grid.Column width={15}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="cvinfo">
                        <span>
                          {curriculumVitae.candidate.firstName}
                          {curriculumVitae.candidate.lastName}
                        </span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <div className="cvinfo">
                        <span>{curriculumVitae.explanation}</span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="cvinfo">
                        <span>
                          {moment(curriculumVitae.createdDate).format(
                            "Do MMMM YYYY"
                          )}
                        </span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="cvinfo">
                        <span>{curriculumVitae.candidate.emailAddress}</span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          ))}
          <Button primary onClick={edit}>
            Düzenle
          </Button>
        </Grid>
                          </Container>*/}
    </div>
  );
}
