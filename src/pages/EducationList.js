import React, { useEffect, useState } from "react";
import { Container, Divider, Grid } from "semantic-ui-react";
import EducationService from "../services/educationService";
import "../css/curriculumvitae.css";
import moment from "moment";
import "moment/locale/tr";
export default function EducationList() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    let educationService = new EducationService();

    educationService
      .getByCurriculumVitaeOrderByDate()
      .then((result) => setEducations(result.data.data));
  }, []);
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>Eğitim Bilgileri</span>
            </div>
          </Grid.Row>
          {educations.map((education) => (
            <Grid.Row key={education.id}>
              <Grid.Column width={1}>
                <svg
                  className={"eduphoto"}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="5em"
                  width="5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
                </svg>
              </Grid.Column>
              <Grid.Column width={15}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Üniversite</span>
                        <br></br>
                        <span>{education.university.universityName}</span>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Fakülte</span>
                        <br></br>
                        <span>{education.school.schoolName}</span>
                      </div>
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Bölüm</span>
                        <br></br>
                        <span>
                          {education.studyDepartment.studyDepartmentName}
                        </span>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Başlangıç Tarihi</span>
                        <br></br>
                        <span>
                          {moment(education.startingDate).format(
                            "Do MMMM YYYY"
                          )}
                        </span>
                      </div>
                    </Grid.Column>

                    <Grid.Column width={5}>
                      <div className="eduinfo">
                        <span>Bitiş Tarihi</span>
                        <br></br>
                        {education.endDate != null ? (
                          <span>
                            {moment(education.endDate).format("Do MMMM YYYY")}
                          </span>
                        ) : (
                          <span>Okuyor</span>
                        )}
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider></Divider>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>
      </Container>

      {/*  <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>University</Table.HeaderCell>
            <Table.HeaderCell>School</Table.HeaderCell>
            <Table.HeaderCell>Study</Table.HeaderCell>
            <Table.HeaderCell>Starting Date</Table.HeaderCell>
            <Table.HeaderCell>End Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {educations.map((education) => (
            <Table.Row key={education.id}>
              <Table.Cell>{education.university.universityName}</Table.Cell>
              <Table.Cell>{education.school.schoolName}</Table.Cell>
              <Table.Cell>{education.studyDepartment.studyDepartmentName}</Table.Cell>
              <Table.Cell>{education.startingDate}</Table.Cell>
              <Table.Cell>{education.endDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
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
          </Table>*/}
    </div>
  );
}
