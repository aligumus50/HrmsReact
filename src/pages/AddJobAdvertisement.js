import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import "../css/addAdvertisement.css";
import { Button, Dropdown, Form, Label, TextArea } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobPositionService from "../services/jobPositionService";
import WorkTimeService from "../services/workTimeService";
import WorkTypeService from "../services/workTypeService";
import * as Yup from "yup";
import moment from "moment";

export default function AddJobAdvertisement() {
  const [jobPositions, setJobpositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    let cityService = new CityService();
    let workTypeService = new WorkTypeService();
    let workTimeService = new WorkTimeService();

    jobPositionService
      .getAll()
      .then((result) => setJobpositions(result.data.data));

    cityService.getAll().then((result) => setCities(result.data.data));

    workTypeService.getall().then((result) => setWorkTypes(result.data.data));
    workTimeService.getAll().then((result) => setWorkTimes(result.data.data));
  }, []);

  //Dropdown a ait key, text, value set etme işlemi
  const getJobPositions = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.positionName,
    value: jobPosition.id,
  }));


  //Dropdown a ait key, text, value set etme işlemi
  const getCities = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));

  //Dropdown a ait key, text, value set etme işlemi
  const getWorkTypes = workTypes.map((workType, index) => ({
    key: index,
    text: workType.typeName,
    value: workType.id,
  }));

  //Dropdown a ait key, text, value set etme işlemi
  const getWorkTimes = workTimes.map((workTime, index) => ({
    key: index,
    text: workTime.timeTypeName,
    value: workTime.id,
  }));

  //yup ile validasyon
  const AddJobAdvertisementSchema = Yup.object().shape({
    jobPositionId: Yup.number().required("İş pozisyonu seçilmelidir."),
    cityId: Yup.number().required("Şehir seçilmelidir."),
    minSalary: Yup.number().min(0, "Minumum maaş 0'dan küçük olamaz."),
    maxSalary: Yup.number().min(0, "Maxiumum maaş 0'dan küçük olamaz."),
    numberOfOpenPositions: Yup.number()
      .min(1, "Açık pozisyon sayısı en az 1 olabilir")
      .required("Pozisyon sayısı belirtilmelidir"),
    jobDescription: Yup.string()
      .min(3, "En az 3 karakter girilmelidir.")
      .required("İş tanımı girişi yapılmalıdır"),
    applicationLastDate: Yup.date(),
  });

  //Formik useFormik hook kullanımı
  //form statetinde tutulan alanlar.
  const formik = useFormik({
    initialValues: {
      //başlangıç değerleri
      jobPositionId: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      numberOfOpenPositions: "",
      jobDescription: "",
      applicationLastDate: "",
      workTypeId: "",
      workTimeId: "",
      employeerId: "23",
      status: "",
    },
    validationSchema: AddJobAdvertisementSchema,

    onSubmit: (values) => {
      //formun submit edilme işlemi
      console.log(values);
      let jobAdvertisement = {
        //post edilecek veriler json objesine çevrildi.
        applicationLastDate: values.applicationLastDate,
        city: { id: values.cityId },
        employeer: { id: values.employeerId },
        jobDescription: values.jobDescription,
        jobPosition: { id: values.jobPositionId },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        numberOfOpenPositions: values.numberOfOpenPositions,
        workType: { id: values.workTypeId },
        workTime: { id: values.workTimeId },
        status: "true",
        createdDate: moment().format("YYYY-MM-DD"),
      };
      console.log(jobAdvertisement);
      jobAdvertisementService
        .add(jobAdvertisement)
        .then((result) => console.log(result.data.message));
    },
  });

  return (
    <div>
      <Form style={{ marginTop: "50px" }} onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
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
              placeholder="Pozisyon Seçimi"
              options={getJobPositions}
              //selection
              onChange={
                (event, data) =>
                  formik.setFieldValue("jobPositionId", data.value) //handlechange işe yaramadığı için alternatif çözüm
              }
              id="jobPositionId"
              value={formik.values.jobPositionId}
            ></Dropdown>
            {formik.touched.jobPositionId && formik.errors.jobPositionId ? (
              <Label color="red" pointing>
                {formik.errors.jobPositionId}
              </Label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <Dropdown
              fluid
              button
              className="icon"
              floating
              //labeled
              //icon="world"
              search
              placeholder="Şehir Seçimi"
              options={getCities}
              onChange={(event, data) =>
                formik.setFieldValue("cityId", data.value)
              }
              id="cityId"
              value={formik.values.cityId}
            ></Dropdown>
            {formik.touched.cityId && formik.errors.cityId ? (
              <Label color="red" pointing>
                {formik.errors.cityId}
              </Label>
            ) : null}
          </Form.Field>
        </Form.Group>

        <Form.Group widths="equal">
          <Form.Field>
            <Dropdown
              fluid
              button
              className="icon"
              floating
              //labeled
              //icon="world"
              search
              placeholder="Çalışma Tipi"
              options={getWorkTypes}
              onChange={(event, data) =>
                formik.setFieldValue("workTypeId", data.value)
              }
              id="workTypeId"
              value={formik.values.workTypeId}
            ></Dropdown>
            {formik.touched.workTypeId && formik.errors.workTypeId ? (
              <Label color="red" pointing>
                {formik.errors.workTypeId}
              </Label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <Dropdown
              fluid
              button
              className="icon"
              floating
              //labeled
              //icon="world"
              search
              placeholder="Çalışma Zamanı"
              options={getWorkTimes}
              onChange={(event, data) =>
                formik.setFieldValue("workTimeId", data.value)
              }
              id="workTimeId"
              value={formik.values.workTimeId}
            ></Dropdown>
            {formik.touched.workTimeId && formik.errors.workTimeId ? (
              <Label color="red" pointing>
                {formik.errors.workTimeId}
              </Label>
            ) : null}
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input
              fluid
              labelPosition="left"
              placeholder="Min. Maaş"
              label="Min. Maaş"
              id="minSalary"
              value={formik.values.minSalary}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.minSalary && formik.errors.minSalary ? (
              <Label color="red" pointing>
                {formik.errors.minSalary}
              </Label>
            ) : null}
          </Form.Field>
          <Form.Field>
            <Form.Input
              labelPosition="left"
              placeholder="Max. Maaş"
              label="Max. Maaş"
              id="maxSalary"
              value={formik.values.maxSalary}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.maxSalary && formik.errors.maxSalary ? (
              <Label color="red" pointing>
                {formik.errors.maxSalary}
              </Label>
            ) : null}
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input
              labelPosition="left"
              placeholder="Açık Pozisyon Sayısı"
              label="Açık Pozisyon"
              id="numberOfOpenPositions"
              value={formik.values.numberOfOpenPositions}
              onChange={formik.handleChange}
            ></Form.Input>
            {formik.touched.numberOfOpenPositions &&
            formik.errors.numberOfOpenPositions ? (
              <Label color="red" pointing>
                {formik.errors.numberOfOpenPositions}
              </Label>
            ) : null}
          </Form.Field>

          <Form.Input
            labelPosition="left"
            placeholder="Son Başvuru Tarihi"
            label="Son Başvuru Tarihi"
            id="applicationLastDate"
            value={formik.values.applicationLastDate}
            onChange={formik.handleChange}
          ></Form.Input>
        </Form.Group>
        <Form.Field>
          <TextArea
            placeholder="İş Açıklaması"
            id="jobDescription"
            value={formik.values.jobDescription}
            onChange={formik.handleChange}
            style={{ minHeight: 100, maxHeight: 100 }}
          />
          {formik.touched.jobDescription && formik.errors.jobDescription ? (
            <Label color="red" pointing>
              {formik.errors.jobDescription}
            </Label>
          ) : null}
        </Form.Field>
        <Button type="submit">Gönder</Button>
      </Form>
    </div>
  );
}
