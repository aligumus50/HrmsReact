import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Form,
  Grid,
  Icon,
} from "semantic-ui-react";
import ExperienceService from "../services/experienceService";
import "../css/experienceListEdit.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { isEditedExperience } from "../store/actions/experienceUpdatePageActions";

export default function ExperienceListEdit({ save }) {
  const experienceValues = useSelector((state) => state.experience);

  console.log(experienceValues);

  const dispatch = useDispatch()
  const handleSaveExperience=(status)=>{
    dispatch(isEditedExperience(status))
  }

  let { id } = useParams();

  let experienceService = new ExperienceService();

  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.
  const formik = useFormik({
    //başlangıç değerleri
    initialValues: {
      workPlaceName: experienceValues.workPlaceName,
      workPositionName: experienceValues.workPositionName,
      startingDate: experienceValues.startingDate,
      endDate: experienceValues.endDate,
    },

    onSubmit: (values) => {
      console.log(values);

      let experience = {
        id:experienceValues.id,
        createdDate:experienceValues.createdDate,
        curriculumVitae:{ id: id },
        startingDate: values.startingDate ,
        endDate: values.endDate,
        workPlaceName: values.workPlaceName,
        workPositionName: values.workPositionName,
      };

      console.log(experience);

      experienceService
        .add(experience)
        .then((result) => console.log(result.data.message));
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Card color="orange" fluid className="cvexperiencecardedit">
          <Card.Content
            header="İş Deneyimleri"
            className="cvheadertittleedit"
          />
          {/* {experiences.map((experience) => ( */}
          <Grid className="cvexperiencecardgridedit">
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
                    className="experienceiconedit"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width="15">
                <Grid columns="equal" className="cvexperienceequalgridedit">
                  <Grid.Row>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>İşyeri Adı</Card.Meta>
                        {/* {experience.workPlaceName} */}
                        <Form.Field>
                          <Form.Input
                            placeholder="İşyeri Adı"
                            id="workPlaceName"
                            defaultValue={experienceValues.workPlaceName}
                            //value={formik.values.createdDate}
                            onChange={formik.handleChange}
                          ></Form.Input>
                        </Form.Field>
                      </Card.Content>
                    </Grid.Column>

                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Pozisyon</Card.Meta>
                        <Form.Field>
                          <Form.Input
                            placeholder="Pozisyon"
                            id="workPositionName"
                            defaultValue={experienceValues.workPositionName}
                            //value={formik.values.createdDate}
                            onChange={formik.handleChange}
                          ></Form.Input>
                        </Form.Field>
                      </Card.Content>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Başlangıç Tarihi</Card.Meta>
                        {/* {moment(experience.startingDate).format("Do MMMM YYYY")} */}
                        <Form.Field>
                          <Form.Input
                            placeholder="Başlangıç Tarihi"
                            id="startingDate"
                            defaultValue={moment(
                              experienceValues.startingDate
                            ).format("YYYY-MM-Do")}
                            //value={formik.values.createdDate}
                            onChange={formik.handleChange}
                          ></Form.Input>
                        </Form.Field>
                      </Card.Content>
                    </Grid.Column>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Bitiş Tarihi</Card.Meta>
                        <Form.Field>
                          <Form.Input
                            placeholder="Bitiş Tarihi"
                            id="endDate"
                            defaultValue={moment(
                              experienceValues.endDate
                            ).format("YYYY-MM-Do")}
                            //value={formik.values.createdDate}
                            onChange={formik.handleChange}
                          ></Form.Input>
                        </Form.Field>
                        {/* {experience.endDate != null ? (
                          moment(experience.endDate).format("Do MMMM YYYY")
                        ) : (
                          <span>Çalışıyor</span>
                        )} */}
                      </Card.Content>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider /><Card.Content extra>
            <Button primary  floated="right"   onClick={()=>handleSaveExperience(true)}  >
              Çıkış Yap
            </Button>
          </Card.Content>
          <Card.Content extra>
            <Button primary type="submit" floated="right">
              Kaydet
            </Button>
          </Card.Content>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
        </Card>
      </Form>
      {/* <Container>
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
      </Container> */}
    </div>
  );
}
