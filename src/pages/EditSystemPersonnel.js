import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Accordion,
  Button,
  Form,
  Grid,
  Icon,
  Label,
  Menu,
  Segment,
} from "semantic-ui-react";
import SystemPersonnelService from "../services/systemPersonnelService";
import * as Yup from "yup";
import moment from "moment";
import { useFormik } from "formik";
import handleErrorMessage from "../layouts/common/errorMessage";
import { useSelector } from "react-redux";

export default function EditSystemPersonnel() {
  let systemPersonnelService = new SystemPersonnelService();
  const systemPersonnelValues = useSelector(state => state.systemPersonnelUpdateProfile)

  console.log(systemPersonnelValues);

  let { id } = useParams();

  //yup ile validasyon
  const AddSystemPersonnelSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Adınız en az 3 karakter olabilir")
      .required("Adınızı girmelisiniz"),
    lastName: Yup.string()
      .min(2, "Soyadınız en az 2 karakter olabilir")
      .required("Soyadınızı girmelisiniz"),
    emailAddress: Yup.string()
      .email("Geçersiz e-posta adresi")
      .required("E-posta adresi girmelisiniz"),
    password_: Yup.string().required("Şifre girmelisiniz"),
    passwordAgain: Yup.string()
      .oneOf([Yup.ref("password_"), null], "Şifre eşleşmiyor")
      .required("Şifre tekrarı girmelisiniz"),
  });

  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.

  const formik = useFormik({
    initialValues: {
      //başlangıç değerleri"
      firstName: systemPersonnelValues.firstName,
      lastName: systemPersonnelValues.lastName,
      emailAddress: systemPersonnelValues.emailAddress,
      password_: systemPersonnelValues.password_,
      passwordAgain: systemPersonnelValues.password_,
    },

    validationSchema:AddSystemPersonnelSchema,

    onSubmit: (values) => {
      // console.log("adınız: " + values.firstName)

      //j harfi json hook ile aynı isimde olmaması için
      let jSystemPersonnel = {
        id: id,
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        password_: values.password_,
        verified: "true",
        createdDate: moment().format("YYYY-MM-DD"),
      };
      console.log(values);
      // console.log(jSystemPersonnel);

      

      systemPersonnelService
        .add(jSystemPersonnel)
        .then((result) => (
          result.data.success
            ? ""
            : handleErrorMessage(result.data.message)
        ))
    },
  });

  const [state, setState] = useState({ activeIndex: 0 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = state;
    const newIndex = activeIndex === index ? -1 : index;

    setState({ activeIndex: newIndex });
  };

  const { activeIndex } = state;
  return (
    <div>
      <Segment placeholder>
        <Grid style={{ backGroundColor: "white" }}>
          <Grid.Row></Grid.Row>
          <Grid.Column width={5}>
            <Menu pointing vertical fluid>
              <Menu.Item name="home"/>
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
              <Menu.Item name="home" />
              <Menu.Item name="messages" />
              <Menu.Item name="friends" />
            </Menu>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              <Accordion styled fluid>
                <Accordion.Title
                  active={activeIndex === 0}
                  index={0}
                  onClick={handleClick}
                >
                  <Icon name="dropdown" />
                  Profili Güncelle
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Field className="systempersonnelfield">
                      <Form.Input
                        id="firstName"
                        name="firstName"
                        labelPosition="left"
                        placeholder="Adınız"
                        //label="Adınız"
                        onChange={formik.handleChange}
                        //defaultValue={systemPersonnelValues?.firstName}
                        value={formik.values.firstName}
                      ></Form.Input>{formik.touched.firstName && formik.errors.firstName ? (
                        <Label
                          color="red"
                          pointing
                          style={{ marginTop: "0px", marginBottom: ".5em" }}
                        >
                          {formik.errors.firstName}
                        </Label>
                      ) : null}
                      <Form.Input
                        labelPosition="left"
                        placeholder="Soyadınız"
                        //label="Soyadınız"
                        id="lastName"
                        value={formik.values.lastName}
                        //value={formik.values.lastName}
                        onChange={formik.handleChange}
                      ></Form.Input>
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <Label
                          color="red"
                          pointing
                          style={{ marginTop: "0px", marginBottom: ".5em" }}
                        >
                          {formik.errors.lastName}
                        </Label>
                      ) : null}
                      <Form.Input
                        type="email"
                        labelPosition="left"
                        placeholder="E-posta Adresi"
                        //label="E-posta Adresi"
                        id="emailAddress"
                        //defaultValue={systemPersonnelValues.emailAddress}
                         value={formik.values.emailAddress}
                        onChange={formik.handleChange}
                      ></Form.Input>
                      {formik.touched.emailAddress &&
                      formik.errors.emailAddress ? (
                        <Label
                          color="red"
                          pointing
                          style={{ marginTop: "0px", marginBottom: ".5em" }}
                        >
                          {formik.errors.emailAddress}
                        </Label>
                      ) : null}
                      <Form.Input
                        //type="password"
                        fluid
                        labelPosition="left"
                        placeholder="Şifre"
                        //label="Şifre"
                        id="password_"
                        //defaultValue={systemPersonnelValues.password_}
                        value={formik.values.password_}
                        onChange={formik.handleChange}
                      ></Form.Input>
                      {formik.touched.password_ && formik.errors.password_ ? (
                        <Label
                          color="red"
                          pointing
                          style={{ marginTop: "0px", marginBottom: ".5em" }}
                        >
                          {formik.errors.password_}
                        </Label>
                      ) : null}
                      <Form.Input
                        //type="password"
                        labelPosition="left"
                        placeholder="Şifre Tekrarı"
                        //label="Şifre Tekrarı"
                        id="passwordAgain"
                        //defaultValue={systemPersonnelValues.passwordAgain}
                        value={formik.values.passwordAgain}
                        onChange={formik.handleChange}
                      ></Form.Input>{" "}
                      {formik.touched.passwordAgain &&
                      formik.errors.passwordAgain ? (
                        <Label
                          color="red"
                          pointing
                          style={{ marginTop: "0px", marginBottom: ".5em" }}
                        >
                          {formik.errors.passwordAgain}
                        </Label>
                      ) : null}
                    </Form.Field>
                    <Button type="submit">Kaydet</Button>
                  </Form>
                </Accordion.Content>
              </Accordion>
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
