import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Icon,
} from "semantic-ui-react";
import ExperienceService from "../services/experienceService";
import moment from "moment";
import "moment/locale/tr";
import "../css/experienceList.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import updateToExperience from "../store/actions/experienceActions";
import { isEditedExperience } from "../store/actions/experienceUpdatePageActions";
export default function ExperienceList({ edit }) {
  
  const experienceUpdatepage = useSelector(state => state.experienceUpdatePage)

  console.log(experienceUpdatepage)
  
  const dispatch = useDispatch();

  const handleUpdateToExperience = (experience) => {
    dispatch(updateToExperience(experience));
  };

  const handleEditExperience=(status)=>{
    dispatch(isEditedExperience(status))
  }

  const [experiences, setExperiences] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    let experienceService = new ExperienceService();

    experienceService
      .getByCurriculumVitaeOrderByDate(id)
      .then((result) => setExperiences(result.data.data));
  }, []);

  return (
    <div>
      <Card color="orange" fluid className="cvexperiencecard">
        <Card.Content header="İş Deneyimleri" className="cvheadertittle" />
        {experiences.map((experience) => (
          <Grid className="cvexperiencecardgrid">
            <Grid.Row>
              <Grid.Column width="1">
                <Card.Content>
                  {/* <svg
                    className={"eduphoto"}
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="5em"
                    width="5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg> */}
                  <Icon
                    circular
                    size="large"
                    name="building"
                    className="experienceicon"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width="15">
                <Grid columns="equal" className="cvexperienceequalgrid">
                  <Grid.Row>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>İşyeri Adı</Card.Meta>
                        {experience.workPlaceName}
                      </Card.Content>
                    </Grid.Column>

                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Pozisyon</Card.Meta>
                        {experience.workPositionName}
                      </Card.Content>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Başlangıç Tarihi</Card.Meta>
                        {moment(experience.startingDate).format("Do MMMM YYYY")}
                      </Card.Content>
                    </Grid.Column>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Bitiş Tarihi</Card.Meta>
                        {experience.endDate != null ? (
                          moment(experience.endDate).format("Do MMMM YYYY")
                        ) : (
                          <span>Çalışıyor</span>
                        )}
                      </Card.Content>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Card.Content extra>
                  <Button primary onClick={()=>{handleUpdateToExperience(experience);handleEditExperience(false)}} floated="right">
                    Düzenle
                  </Button>
                </Card.Content>
                <Divider />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        ))}
      </Card>
      {/*<Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>İş Deneyimleri</span>
            </div>
          </Grid.Row>
          {experiences.map((experience) => (
            <Grid.Row key={experience.id}>
              <Grid.Column width={1}>
                <svg
                  className={"eduphoto"}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="5em"
                  width="5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                </svg>
              </Grid.Column>
              <Grid.Column width={15}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>İşyeri Adı</span>
                        <br></br>
                        <span>{experience.workPlaceName}</span>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Pozisyon</span>
                        <br></br>
                        <span>{experience.workPositionName}</span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Başlangıç Tarihi</span>
                        <br></br>
                        <span>
                          {moment(experience.startingDate).format(
                            "Do MMMM YYYY"
                          )}
                        </span>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Bitiş Tarihi</span>
                        <br></br>
                        {experience.endDate != null ? (
                          <span>
                            {moment(experience.endDate).format("Do MMMM YYYY")}
                          </span>
                        ) : (
                          <span>Çalışıyor</span>
                        )}
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider></Divider>
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
