import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Grid } from "semantic-ui-react";
import ExperienceService from "../services/experienceService";
import moment from "moment";
import "moment/locale/tr";
export default function ExperienceList({edit}) {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    let experienceService = new ExperienceService();

    experienceService
      .getByCurriculumVitaeOrderByDate()
      .then((result) => setExperiences(result.data.data));
  }, []);

  return (
    <div>
      <Container>
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
          <Button primary onClick={edit}>Düzenle</Button>
        </Grid>
        
      </Container>
    </div>
  );
}
