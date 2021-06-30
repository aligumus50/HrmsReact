import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Form,
  Grid,
  Image,
} from "semantic-ui-react";
import "../css/curriculumVitaeEdit.css";
import CurriculumVitaeService from "../services/curriculumVitaeService";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import isEditedCurriculumVitae from "../store/actions/curriculumVitaeUpdatePageActions";
import moment from "moment";

export default function CurriculumVitaeEdit({ save }) {
  let curriculumVitaeService = new CurriculumVitaeService();

  const curriculumVitaeValues = useSelector(state => state.curriculumVitae) 
  const curriculumVitaeUpdatepage = useSelector(state => state.curriculumVitaeUpdatePage)

  console.log(curriculumVitaeUpdatepage)
  console.log(curriculumVitaeValues)

  const dispatch = useDispatch()

  const handleSaveCurriculumVitae=(status)=>{
    dispatch(isEditedCurriculumVitae(status))
  }

  const [curriculumVitae, setcurriculumVitae] = useState();

  let { id } = useParams();

  useEffect(() => {
    curriculumVitaeService
      .getById(id)
      .then((result) => setcurriculumVitae(result.data.data));
  }, []);

  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.

  const formik = useFormik({
    initialValues: {
      //firstName: "",
      //lastName: "",
      explanation: curriculumVitaeValues.explanation,
      //emailAddress: "",
      candidateId: "63",
      id: id,
      profilePhotoLink:
        "https://res.cloudinary.com/dkydco7ta/image/upload/v1622822257/cky2nq8cb7owq2bj7k7n.png",
      status: "true",
      createdDate: curriculumVitaeValues.createdDate,
    },

    onSubmit: (values) => {
      console.log("adınız: " + values.firstName);

      //j harfi json hook ile aynı isimde olmaması için
      let jCurriculumVitae = {
        candidate: {id: values.candidateId},
        id: values.id,
        explanation: values.explanation,
        createdDate: values.createdDate,
        profilePhotoLink: values.profilePhotoLink,
        status: values.status,
        createdDate: moment(curriculumVitaeValues.createdDate).format("YYYY-MM-Do"),
      };

      console.log(jCurriculumVitae);

      //curriculum gönderilmeli adde unutma
      curriculumVitaeService
        .add(jCurriculumVitae)
        .then((result) => console.log(result.data.message));
    },
  });

  console.log(formik.values.explanation)
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Card color="orange" className="cvprofilecardedit" fluid>
          <Card.Content
            header="Profil Bilgisi"
            className="cvheadertittleedit"
          ></Card.Content>

          <Grid className="cvprofilecardgridedit">
            <Grid.Row>
              <Grid.Column width="2">
                <Card.Content>
                  <Image
                    circular
                    floated="left"
                    size="medium"
                    //src={curriculumVitae?.profilePhotoLink}
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width="14">
                <Card fluid className="contentcardedit">
                  <Card.Content className="cvprofilecontentnameedit">
                    {/* {curriculumVitae?.candidate.firstName}
                  {curriculumVitae?.candidate.lastName} */}
                    <Form.Group widths="equal">
                      <Form.Field>
                        <Form.Input
                          defaultValue={curriculumVitae?.candidate.firstName}
                          placeholder="Adınız"
                          id="firstName"
                          //value={formik.values.firstName}
                          //onChange={formik.handleChange}
                          readOnly
                        ></Form.Input>
                      </Form.Field>
                      <Form.Field>
                        <Form.Input
                          placeholder="Soyadınız"
                          id="lastName"
                          defaultValue={curriculumVitae?.candidate.lastName}
                          //value={formik.values.lastName}
                          //onChange={formik.handleChange}
                          readOnly
                        ></Form.Input>
                      </Form.Field>
                    </Form.Group>
                  </Card.Content>

                  <Card.Content className="cvprofilecontentedit">
                    <Card.Meta>Açıklama</Card.Meta>
                    {/* {curriculumVitae?.explanation} */}

                    <Form.Field>
                      <Form.Input
                        placeholder="Açıklama"
                        id="explanation"
                        defaultValue={curriculumVitae?.explanation}
                        //value={formik.values.explanation}
                        onChange={formik.handleChange}
                      ></Form.Input>
                    </Form.Field>
                  </Card.Content>
                  <Card.Content description className="cvprofilecontentedit">
                    <Card.Meta>Oluşturulma Tarihi</Card.Meta>
                    {/* {moment(curriculumVitae?.createdDate).format("Do MMMM YYYY")} */}
                    <Form.Field>
                      <Form.Input
                        placeholder="Oluşturulma Tarihi"
                        id="createdDate"
                        //defaultValue={moment(curriculumVitae?.createdDate).format("Do MMMM YYYY")}
                        value={formik.values.createdDate}
                        onChange={formik.handleChange}
                      ></Form.Input>
                    </Form.Field>
                  </Card.Content>
                  <Card.Content className="cvprofilecontentedit">
                    <Card.Meta>E-Posta Adresi</Card.Meta>
                    {/* {curriculumVitae?.candidate.emailAddress} */}
                    <Form.Field>
                      <Form.Input
                        placeholder="E-Posta Adresi"
                        id="emailAddress"
                        defaultValue={curriculumVitae?.candidate.emailAddress}
                        //value={formik.values.emailAddress}
                        //onChange={formik.handleChange}
                        readOnly
                      ></Form.Input>
                    </Form.Field>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Card.Content extra>
          <Button primary floated="right" onClick={()=>handleSaveCurriculumVitae(true)}>
              Çıkış Yap
            </Button>
            <Button primary floated="right" type="submit">
              Kaydet
            </Button>
          </Card.Content>
        </Card>
      </Form>
      {/* onClick={save} */}
      {/* <Container>
        <Grid>
          <Grid.Row>
            <div id={"title"}>
              <span>Profil Bilgisi</span>
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
