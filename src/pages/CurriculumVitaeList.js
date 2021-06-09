import React, { useEffect, useState } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import CurriculumVitaeService from "../services/curriculumVitaeService";
import "../css/curriculumvitae.css";
import moment from "moment";
import 'moment/locale/tr'

export default function CurriculumVitae() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);

  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();

    curriculumVitaeService
      .getAll()
      .then((result) => setCurriculumVitaes(result.data.data));
  }, []);

  return (
    <div>
      <Container>
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
                        <span>{moment(curriculumVitae.createdDate).format('Do MMMM 2021') }</span>
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
        </Grid>
      </Container>
    </div>
  );
}
