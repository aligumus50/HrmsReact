import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Image,
  Label,
} from "semantic-ui-react";
import "../css/addCandidate.css";
import CandidateService from "../services/candidateService";
import * as Yup from "yup";
import { useState } from "react";
import moment from "moment";
import alertify from "alertifyjs";
import "../css/alertify.css";

export default function AddCandidate() {
  let candidateService = new CandidateService();
  //yup ile validasyon
  const AddCandidateSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Adınız en az 3 karakter olabilir")
      .required("Adınızı girmelisiniz"),
    lastName: Yup.string()
      .min(2, "Soyadınız en az 2 karakter olabilir")
      .required("Soyadınızı girmelisiniz"),
    dateOfBirth: Yup.string()
      .min(4, "Doğum yılı 4 karakter olabilir")
      .max(4, "Doğum yılı 4 karakter olabilir")
      .required("Doğum yılınızı girmelisiniz"),
    nationalityIdentity: Yup.string()
      .min(11, "Kimlik numarası 11 haneli olmalı")
      .max(11, "Kimlik numarası 11 haneli olmalı")
      .required("Kimlik numaranızı girmelisiniz"),
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
      dateOfBirth: "",
      nationalityIdentity: "",
      emailAddress: "",
      password_: "",
      passwordAgain: "",
      verified: "",
      mernisVerified: "",
      userId: "",
      curriculumVitaes: [],
    },

    validationSchema: AddCandidateSchema,

    onSubmit: (values) => {
      //formun sabit edilme işlemi
      console.log(values);
      let candidate = {
        //post edilecek veriler json objesine çevriliyor.
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth: values.dateOfBirth,
        nationalityIdentity: values.nationalityIdentity,
        emailAddress: values.emailAddress,
        password_: values.password_,
        verified: values.verified,
        createdDate: moment().format("YYYY-MM-DD"),
        mernisVerified: "true",
        curriculumVitaes: [],
      };
      console.log(candidate);
      let duration = 5;
      let interval, msg;

      candidateService.add(candidate).then((result) =>
        (
          result.data.success
            ? ""
            : (msg = alertify.error(
                result.data.message + " (" + duration + ") sn",
                5,
                function () {
                  clearInterval(interval);
                }
              ))

          (interval = setInterval(function () {
            msg.setContent(result.data.message + " (" + --duration + ") sn");
          }, 1000))
        )
      );
    },
  });

  return (
    <div>
      <Grid
        columns={2}
        //stackable
        textAlign="center"
        className="signup"
      >
        <Grid.Row>
          <Grid.Column verticalAlign="middle">
            <Image src="https://specials-images.forbesimg.com/imageserve/5fce71245c7f26c56e89bbd5/960x0.jpg" />
          </Grid.Column>
          <Divider vertical></Divider>
          <Grid.Column>
            <Header as="h1">
              <Label size="big">
                Zaten üye misin?{" "}
                <NavLink to="/candidate/signin">Üye girişi yap</NavLink>{" "}
              </Label>
            </Header>
            <Form onSubmit={formik.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <Form.Input
                    fluid
                    labelPosition="left"
                    placeholder="Adınız"
                    //label="Adınız"
                    id="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <Label color="red" pointing>
                      {formik.errors.firstName}
                    </Label>
                  ) : null}
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    labelPosition="left"
                    placeholder="Soyadınız"
                    //label="Soyadınız"
                    id="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <Label color="red" pointing>
                      {formik.errors.lastName}
                    </Label>
                  ) : null}
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Form.Input
                  labelPosition="left"
                  placeholder="Doğum Yılınız"
                  //label="Doğum Yılınız"
                  id="dateOfBirth"
                  value={formik.values.dateOfBirth}
                  onChange={formik.handleChange}
                ></Form.Input>
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <Label color="red" pointing>
                    {formik.errors.dateOfBirth}
                  </Label>
                ) : null}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  labelPosition="left"
                  placeholder="Türkiye Cumhuriyeti Kimlik Numarası"
                  //label="Türkiye Cumhuriyeti Kimlik Numarası"
                  id="nationalityIdentity"
                  value={formik.values.nationalityIdentity}
                  onChange={formik.handleChange}
                ></Form.Input>
                {formik.touched.nationalityIdentity &&
                formik.errors.nationalityIdentity ? (
                  <Label color="red" pointing>
                    {formik.errors.nationalityIdentity}
                  </Label>
                ) : null}
              </Form.Field>
              <Form.Field>
                <Form.Input
                  labelPosition="left"
                  placeholder="E-posta Adresi"
                  //label="E-posta Adresi"
                  id="emailAddress"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                ></Form.Input>
                {formik.touched.emailAddress && formik.errors.emailAddress ? (
                  <Label color="red" pointing>
                    {formik.errors.emailAddress}
                  </Label>
                ) : null}
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <Form.Input
                    fluid
                    labelPosition="left"
                    placeholder="Şifre"
                    //label="Şifre"
                    id="password_"
                    value={formik.values.password_}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.password_ && formik.errors.password_ ? (
                    <Label color="red" pointing>
                      {formik.errors.password_}
                    </Label>
                  ) : null}
                </Form.Field>
                <Form.Field>
                  <Form.Input
                    labelPosition="left"
                    placeholder="Şifre Tekrarı"
                    //label="Şifre Tekrarı"
                    id="passwordAgain"
                    value={formik.values.passwordAgain}
                    onChange={formik.handleChange}
                  ></Form.Input>
                  {formik.touched.passwordAgain &&
                  formik.errors.passwordAgain ? (
                    <Label color="red" pointing>
                      {formik.errors.passwordAgain}
                    </Label>
                  ) : null}
                </Form.Field>
              </Form.Group>
              <Button type="submit">Kayıt Ol</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
