import React from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Label,
  Segment,
} from "semantic-ui-react";
import systempersonnelimg2 from "../images/systempersonnel2.jpg";
import "../css/addSystemPersonnel.css";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import SystemPersonnelService from "../services/systemPersonnelService";
import moment from "moment";
import * as Yup from "yup";
import handleErrorMessage from "../layouts/common/errorMessage";

export default function AddSystemPersonnel() {
  let systemPersonnelService = new SystemPersonnelService();

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
      //başlangıç değerleri
      firstName: "",
      lastName: "",
      emailAddress: "",
      password_: "",
      passwordAgain: "",
    },

    validationSchema:AddSystemPersonnelSchema,
    
    onSubmit: (values) => {
      console.log(values);
      let systemPersonnel = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailAddress: values.emailAddress,
        password_: values.password_,
        passwordAgain: values.passwordAgain,
        verified: "true",
        createdDate: moment().format("YYYY-MM-DD"),
      };

      console.log(systemPersonnel);
      
      systemPersonnelService
        .add(systemPersonnel)
        .then((result) => (
            result.data.success
              ? ""
              : handleErrorMessage(result.data.message)
          ));
    },
  });
  return (
    <div>
      <Segment className="systempersonnelsegmentfield">
        <Grid columns={2}>
          <Divider vertical></Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Image src={systempersonnelimg2} style={{ width: "100%" }} />
            </Grid.Column>

            <Grid.Column>
              <Header as="h1">
                <Label size="big">
                  Zaten üye misin?{" "}
                  <NavLink to="/systempersonnel/signin">Üye girişi yap</NavLink>{" "}
                </Label>
              </Header>
              <Form onSubmit={formik.handleSubmit}>
                <Form.Field className="systempersonnelfield">
                  <Form.Input
                    labelPosition="left"
                    placeholder="Adınız"
                    //label="Adınız"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.firstName && formik.errors.firstName ? (
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
                    value={formik.values.emailAddress}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.emailAddress && formik.errors.emailAddress ? (
                    <Label
                      color="red"
                      pointing
                      style={{ marginTop: "0px", marginBottom: ".5em" }}
                    >
                      {formik.errors.emailAddress}
                    </Label>
                  ) : null}
                  <Form.Input
                    type="password"
                    fluid
                    labelPosition="left"
                    placeholder="Şifre"
                    //label="Şifre"
                    id="password_"
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
                    type="password"
                    labelPosition="left"
                    placeholder="Şifre Tekrarı"
                    //label="Şifre Tekrarı"
                    id="passwordAgain"
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
                <Button type="submit">Kayıt Ol</Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
