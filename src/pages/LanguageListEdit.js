import React from "react";
import { Button, Container, Grid } from "semantic-ui-react";

export default function LanguageListEdit({ save }) {
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>Yabancı Dil Deneyimleri</span>
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
