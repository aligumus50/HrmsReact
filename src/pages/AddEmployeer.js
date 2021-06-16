import React from "react";
import { NavLink } from "react-router-dom";
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
import employerimg from "../images/Employer.jpg";
import "../css/addEmployeer.css";
import EmployeerService from "../services/employeerService";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";

export default function AddEmployeer() {
  let employeerService = new EmployeerService();

  //yup ile validasyon
  const AddEmployeerSchema = Yup.object().shape({
    companyName: Yup.string()
      .min(2, "Şirket adı en az 2 karakter olabilir")
      .required("Şirket adı girmelisiniz"),
    webSiteAddress: Yup.string()
    .matches(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,"Web site adresinizi kontrol edin")
      .required("Web site adresi girmelisiniz"),
    emailAddress: Yup.string()
      .email("Geçersiz e-posta adresi")
      .required("E-posta adresi girmelisiniz"),
    telNumber: Yup.string().required("Telefon numarası girmelisiniz"),
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
      companyName: "",
      webSiteAddress: "",
      emailAddress: "",
      telNumber: "",
      password_: "",
      passwordAgain: "",
    },

    validationSchema: AddEmployeerSchema,

    onSubmit: (values) => {
      console.log(values);
      let employeer = {
        companyName: values.companyName,
        webSiteAddress: values.webSiteAddress,
        emailAddress: values.emailAddress,
        telNumber: values.telNumber,
        password_: values.password_,
        passwordAgain: values.passwordAgain,
        createdDate: moment().format("YYYY-MM-DD"),
        verified: "true",
        systemVerified: "true",
        jobAdvertisements: [],
      };

      console.log(employeer);

      employeerService
        .add(employeer)
        .then((result) => console.log(result.data.message));
    },
  });
  return (
    <div>
      <Segment style={{ marginTop: "15px" }} className="empimg">
        <Image src={employerimg} fluid />
      </Segment>
      <Segment className="empsegmentfield">
        <Header as="h1">
          <Label size="big">
            Zaten üye misin?{" "}
            <NavLink to="/employeer/signin">Üye girişi yap</NavLink>{" "}
          </Label>
        </Header>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field className="empfield">
            <Form.Input
              labelPosition="left"
              placeholder="Şirket Adı"
              //label="Şirket Adı"
              id="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.companyName && formik.errors.companyName ? (
              <Label
                color="red"
                pointing
                style={{ marginTop: "0px", marginBottom: ".5em" }}
              >
                {formik.errors.companyName}
              </Label>
            ) : null}
            <Form.Input
              labelPosition="left"
              placeholder="Web Sitesi"
              //label="Web Sitesi"
              id="webSiteAddress"
              value={formik.values.webSiteAddress}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.webSiteAddress && formik.errors.webSiteAddress ? (
              <Label
                color="red"
                pointing
                style={{ marginTop: "0px", marginBottom: ".5em" }}
              >
                {formik.errors.webSiteAddress}
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
              labelPosition="left"
              placeholder="Telefon No"
              //label="Telefon No"
              id="telNumber"
              value={formik.values.telNumber}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.telNumber && formik.errors.telNumber ? (
              <Label
                color="red"
                pointing
                style={{ marginTop: "0px", marginBottom: ".5em" }}
              >
                {formik.errors.telNumber}
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
            {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
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
      </Segment>
    </div>
  );
}
