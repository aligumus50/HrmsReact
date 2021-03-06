import React, { useEffect, useState } from "react";
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
import EducationService from "../services/educationService";
import "moment/locale/tr";
import moment from "moment";
import "../css/educationListEdit.css";
import UniversityService from "../services/universityService";
import SchoolService from "../services/schoolService";
import StudyDepartmentService from "../services/studyDepartmentService";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { isEditedEducation } from "../store/actions/educationUpdatePageActions";
export default function EducationListEdit({ save }) {

  const educationValues = useSelector(state => state.education) 
  const educationUpdatepage = useSelector(state => state.educationUpdatePage)

  console.log(educationUpdatepage)
  console.log(educationValues)

  const dispatch = useDispatch()
  const handleSaveEducation=(status)=>{
    dispatch(isEditedEducation(status))
  }
    
  let { id } = useParams();

  let educationService = new EducationService();

  const [educations, setEducations] = useState([]);

  const [universities, setUniversities] = useState([]);
  const [schools, setSchools] = useState([]);
  const [studyDepartments, setStudyDepartments] = useState([]);

  useEffect(() => {
    let educationService = new EducationService();
    let universityService = new UniversityService();
    let schoolService = new SchoolService();
    let studyDepartmentService = new StudyDepartmentService();

    universityService
      .getAll()
      .then((result) => setUniversities(result.data.data));

    schoolService.getAll().then((result) => setSchools(result.data.data));

    studyDepartmentService
      .getAll()
      .then((result) => setStudyDepartments(result.data.data));

   educationService
      .getByCurriculumVitaeOrderByDate(id)
      .then((result) => setEducations(result.data.data));
  }, []);

  //Dropdown a ait key, text, value set etme i??lemi
  const getUniversities = universities.map((university, index) => ({
    key: index,
    text: university.universityName,
    value: university.id,
  }));

  //Dropdown a ait key, text, value set etme i??lemi
  const getSchools = schools.map((school, index) => ({
    key: index,
    text: school.schoolName,
    value: school.id,
  }));

  //Dropdown a ait key, text, value set etme i??lemi
  const getStudyDepartments = studyDepartments.map(
    (studyDepartment, index) => ({
      key: index,
      text: studyDepartment.studyDepartmentName,
      value: studyDepartment.id,
    })
  );

  //Formik useFormik hook kullan??m??
  //form statetinde tutulan alanlar.
  const formik = useFormik({
    initialValues: {
      //ba??lang???? de??erleri
      universityId: educationValues?.university.id,
      schoolId: educationValues?.school.id,
      studyDepartmentId: educationValues?.studyDepartment.id,
      startingDate: educationValues?.startingDate,
      endDate: educationValues?.endDate

    },
    onSubmit: (values) => {
      console.log(values);

      let education = {
        id:educationValues.id,
        createdDate:educationValues.createdDate,
        curriculumVitae:{id:id},
        startingDate:values.startingDate,
        endDate: values.endDate,
        university:{id:values.universityId},
        studyDepartment:{id:values.studyDepartmentId},
        school:{id:values.schoolId} ,
        
      };

      console.log(education);

      educationService
        .add(education)
        .then((result) => console.log(result.data.message));
    },
  });
  return (

    <div>
        <Form onSubmit={formik.handleSubmit} >
        <Card color="orange" fluid className="cveducationcardedit">
          <Card.Content
            header="E??itim Bilgileri"
            className="cvheadertittleedit"
          />
          {/* {educations.map((education) => ( */}
            <Grid className="cveducationcardgridedit">
              <Grid.Row>
                <Grid.Column width="1">
                  <Card.Content>
                    {/* <svg
                    className={"eduphoto"}
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="5em"
                    width="5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z"></path>
                  </svg> */}

                    <Icon
                      circular
                      size="large"
                      name="university"
                      className="educationiconedit"
                    />
                  </Card.Content>
                </Grid.Column>
                <Grid.Column width="15">
                  <Grid columns="equal" className="cveducationequalgridedit">
                    <Grid.Row>
                      <Grid.Column width="5">
                        <Card.Content>
                          <Card.Meta>??niversite</Card.Meta>
                          {/* {education.university.universityName} */}
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
                              placeholder="??niversite Se??imi"
                              options={getUniversities}
                              //selection
                              onChange={
                                (event, data) =>
                                  formik.setFieldValue(
                                    "universityId",
                                    data.value
                                  ) //handlechange i??e yaramad?????? i??in alternatif ????z??m
                              }
                              id="universityId"
                              defaultValue={educationValues.university.id}
                              //value={formik.values.universityId}
                            ></Dropdown>
                          </Form.Field>
                        </Card.Content>
                      </Grid.Column>

                      <Grid.Column width="5">
                        <Card.Content>
                          <Card.Meta>Fak??lte</Card.Meta>
                          {/* {education.school.schoolName} */}
                          <Dropdown
                            fluid
                            //pointing
                            button
                            className="icon"
                            //floating
                            //labeled
                            //icon="world"
                            search
                            placeholder="Fak??lte Se??imi"
                            options={getSchools}
                            //selection
                            onChange={
                              (event, data) =>
                                formik.setFieldValue("schoolId", data.value) //handlechange i??e yaramad?????? i??in alternatif ????z??m
                            }
                            id="schoolId"
                            defaultValue={educationValues.school.id}
                            //value={formik.values.schoolId}
                          ></Dropdown>
                        </Card.Content>
                      </Grid.Column>

                      <Grid.Column width="5">
                        <Card.Content>
                          <Card.Meta>B??l??m</Card.Meta>
                          {/* {education.studyDepartment.studyDepartmentName} */}
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
                            placeholder="B??l??m Se??imi"
                            options={getStudyDepartments}
                            //selection
                            onChange={
                (event, data) =>
                  formik.setFieldValue("studyDepartmentId", data.value) //handlechange i??e yaramad?????? i??in alternatif ????z??m
              }
                            id="studyDepartmentId"
                            defaultValue={educationValues.studyDepartment.id}
                            //value={formik.values.studyDepartmentId}
                          ></Dropdown>
                          </Form.Field>
                          
                        </Card.Content>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width="5">
                        <Card.Content>
                          <Card.Meta>Ba??lang???? Tarihi</Card.Meta>
                          <Form.Field>
                            <Form.Input
                              placeholder="Ba??lang???? Tarihi"
                              id="startingDate"
                              defaultValue={moment(educationValues.startingDate).format("YYYY-MM-Do")}
                              //value={formik.values.createdDate}
                              onChange={formik.handleChange}
                            ></Form.Input>
                          </Form.Field>
                        </Card.Content>
                      </Grid.Column>
                      <Grid.Column width="5">
                        <Card.Content>
                          <Card.Meta>Biti?? Tarihi</Card.Meta>
                          <Form.Field>
                            <Form.Input
                              placeholder="Biti?? Tarihi"
                              id="endDate"
                              defaultValue={moment(educationValues.endDate).format("YYYY-MM-Do")}
                              //value={formik.values.createdDate}
                              onChange={formik.handleChange}
                            ></Form.Input>
                          </Form.Field>
                        </Card.Content>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  <Divider /><Card.Content extra>
            <Button primary  floated="right"   onClick={()=>handleSaveEducation(true)}  >
              ????k???? Yap
            </Button>
          </Card.Content><Card.Content extra>
            <Button primary  floated="right" type="submit"  >
              Kaydet
            </Button>
          </Card.Content>
                </Grid.Column>
              </Grid.Row>
            </Grid>
      
          
        </Card>
      </Form> 
    </div>
    // <div>
    
    //   {/* onClick={save} */}
    //   {/* <Container>
    //     <Grid>
    //       <Grid.Row>
    //         <div id={"title"}>
    //           <span>E??itim Bilgisi</span>
    //         </div>
    //       </Grid.Row>

    //       <Grid.Row>
    //         <Grid.Column width={1}>
    //           <span>D??zenleme Ekran??</span>
    //           <Button primary onClick={save}>
    //             Kaydet
    //           </Button>
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container> */}
    // </div>
  );
}
