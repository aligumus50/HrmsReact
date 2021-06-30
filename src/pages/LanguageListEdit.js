import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Form,
  Grid,
  Icon,
} from "semantic-ui-react";
import "../css/languageListEdit.css";
import ForeignLanguageService from "../services/foreignLanguageService";
import LangugaeService from "../services/languageService";
import { isEditedLanguage } from "../store/actions/languageUpdatePageActions";

export default function LanguageListEdit({ save }) {
  const languageValues = useSelector((state) => state.language);

  let languageService = new LangugaeService();
  let { id } = useParams();

  const dispatch = useDispatch()
  const handleSaveLanguage=(status)=>{
    dispatch(isEditedLanguage(status))
  }

  const [foreignLanguages, setForeignLanguages] = useState([]);

  useEffect(() => {
    let foreignLanguageService = new ForeignLanguageService();

    foreignLanguageService
      .getAll()
      .then((result) => setForeignLanguages(result.data.data));
  }, []);

  //Dropdown a ait key, text, value set etme işlemi
  const getForeignLanguages = foreignLanguages.map(
    (foreignLanguage, index) => ({
      key: index,
      text: foreignLanguage.foreignLanguageName,
      value: foreignLanguage.id,
    })
  );

  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.
  const formik = useFormik({
    initialValues: {
      //başlangıç değerleri
      foreignLanguageId: "",
      languageLevel: "",
    },

    onSubmit: (values) => {
      console.log(values);

      let language = {
        id: languageValues.id,
        createdDate: languageValues.createdDate,
        curriculumVitae: { id: id },
        languageLevel: values.languageLevel,
        foreignLanguage: { id: values.foreignLanguageId },
      };
      console.log(language);

      languageService
        .add(language)
        .then((result) => console.log(result.data.message));
    },
  });
  console.log(getForeignLanguages);
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Card color="orange" fluid className="cvlanguagecardedit">
          <Card.Content
            header="Yabancı Dil Deneyimleri"
            className="cvheadertittleedit"
          />
          {/* {languages.map((language) => ( */}
          <Grid className="cvlanguagecardgridedit">
            <Grid.Row>
              <Grid.Column width="1">
                <Card.Content>
                  {/* <svg
                  className={"eduphoto"}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  height="5em"
                  width="5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path>
                </svg> */}
                  <Icon
                    circular
                    size="large"
                    name="language"
                    className="languageicon"
                  />
                </Card.Content>
              </Grid.Column>
              <Grid.Column width="15">
                <Grid columns="equal" className="cvlanguageequalgridedit">
                  <Grid.Row>
                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Dil</Card.Meta>
                        {/* {language.foreignLanguage.foreignLanguageName} */}
                        <Form.Field>
                          <Dropdown
                            fluid
                            //pointing
                            button
                            className="icon"
                            //floating
                            //labeled
                            //icon="world"
                            search
                            placeholder="Yabancı Dil Seçimi"
                            options={getForeignLanguages}
                            //selection
                            onChange={
                              (event, data) =>
                                formik.setFieldValue(
                                  "foreignLanguageId",
                                  data.value
                                ) //handlechange işe yaramadığı için alternatif çözüm
                            }
                            id="foreignLanguageId"
                            defaultValue={languageValues?.foreignLanguage.id}
                            //value={formik.values.universityId}
                          ></Dropdown>
                        </Form.Field>
                      </Card.Content>
                    </Grid.Column>

                    <Grid.Column width="5">
                      <Card.Content>
                        <Card.Meta>Dil Seviyesi</Card.Meta>
                        {/* <Rating
                          icon="star"
                          defaultRating={parseInt(language.languageLevel)}
                          maxRating={5}
                          disabled
                        /> */}
                        <Form.Field>
                          <Form.Input
                            placeholder="Dil Seviyesi"
                            id="languageLevel"
                            defaultValue={languageValues.languageLevel}
                            //value={formik.values.createdDate}
                            onChange={formik.handleChange}
                          ></Form.Input>
                        </Form.Field>
                      </Card.Content>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <Divider /><Card.Content extra>
            <Button primary  floated="right"   onClick={()=>handleSaveLanguage(true)}  >
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
          {/* ))} */}
          
        </Card>
      </Form>
      {/* <Container>
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
      </Container> */}
    </div>
  );
}
