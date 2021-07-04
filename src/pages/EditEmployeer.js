import React, { useEffect, useState } from "react";
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
import moment from "moment";
import { useFormik } from "formik";
import EmployeerService from "../services/employeerService";
import handleErrorMessage from "../layouts/common/errorMessage";
import handleSuccessMessage from "../layouts/common/errorMessage";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmployeerProfileStatusService from "../services/employeerProfileStatusService";
export default function EditEmployeer() {
  let employeerService = new EmployeerService();

  let employeerProfileStatusService = new EmployeerProfileStatusService();

  const [employeerProfileStatus, setEmployeerProfileStatus] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    employeerProfileStatusService
      .getTopByEmployeer_IdOrderByIdDesc(id)
      .then((result) => setEmployeerProfileStatus(result.data.data));
  }, []);

  const employeerValues = useSelector((state) => state.employeerUpdateProfile);

  console.log(employeerValues);
  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.

  const formik = useFormik({
    initialValues: {
      //başlangıç değerleri
      companyName: employeerValues.companyName,
      webSiteAddress: employeerValues.webSiteAddress,
      emailAddress: employeerValues.emailAddress,
      telNumber: employeerValues.telNumber,
      password_: employeerValues.password_,
      passwordAgain: employeerValues.password_,
    },

    //validationSchema: AddEmployeerSchema,

    onSubmit: (values) => {
      console.log(values);
      let employeer = {
        id: id,
        companyName: values.companyName,
        webSiteAddress: values.webSiteAddress,
        emailAddress: values.emailAddress,
        telNumber: values.telNumber,
        password_: values.password_,
        createdDate: employeerValues.createdDate,
        verified: "true",
        systemVerified: "true",
        updateProfile: {},
        //jobAdvertisements: [],
      };

      console.log(employeer);

      employeerService
        .update(employeer)
        .then((result) =>
          result.data.success
            ? handleSuccessMessage(result.data.message)
            : handleErrorMessage(result.data.message)
        );
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
              <Menu.Item name="home" />
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
                    <Form.Field className="empfield">
                      <Form.Input
                        labelPosition="left"
                        placeholder="Şirket Adı"
                        //label="Şirket Adı"
                        id="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                      ></Form.Input>
                      {formik.touched.companyName &&
                      formik.errors.companyName ? (
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
                      {formik.touched.webSiteAddress &&
                      formik.errors.webSiteAddress ? (
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

                    {employeerProfileStatus?.status === false ? (
                      <Button disabled>Onay Bekleniyor</Button>
                    ) : (
                      <Button type="submit">Onaya Gönder</Button>
                    )}
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
