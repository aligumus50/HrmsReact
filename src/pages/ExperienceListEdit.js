import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";

export default function ExperienceListEdit({ save }) {
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>İş Deneyimleri</span>
            </div>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
              <span>Düzenleme Ekranı</span>
              <Button primary onClick={save}>
                Kaydet
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
