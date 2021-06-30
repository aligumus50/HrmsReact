import React, { useEffect, useState } from "react";
import {
  Card,
  Checkbox,
  Divider,
  Form,
  Grid,
  Image,
  Label,
  Pagination,
  Rating,
  Segment,
} from "semantic-ui-react";
import { MultiSelect } from "primereact/multiselect";
import CityService from "../services/cityService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import "../css/candidateJobAdvertisement.css";
import _ from "lodash";
import moment from "moment";
import WorkTimeService from "../services/workTimeService";
import FavoriteJobAdvertisementService from "../services/favoriteJobAdvertisementService";
import { useDispatch } from "react-redux";
import handleErrorMessage from "../layouts/common/errorMessage";
import { set } from "lodash";
import { RadioButton } from "primereact/radiobutton";
export default function CandidateJobAdvertisementList() {
  const [cities, setCities] = useState([]);
  const [workTimes, setWorkTimes] = useState([]);
  const [selectedRepresentative, setSelectedRepresentative] = useState([]);
  const [selectedWorkTimeRepresentative,setSelectedWorkTimeRepresentative,] = useState([]);
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  const [favoriteJobAdversitements, setFavoriteJobAdversitements] = useState([]);
  
  
  //const [favoritedJobAdvertisement, setFavoritedJobAdvertisement] = useState([]);

  //const isFavoritedButton = useSelector((state) => state.favoriteUpdateButton);

  let jobAdvertisementService = new JobAdvertisementService();
  let favoriteJobAdversitementService = new FavoriteJobAdvertisementService();

  //pagination
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(1);

  
  useEffect(() => {
    favoriteJobAdversitementService
      .getAll()
      .then((result) => setFavoriteJobAdversitements(result.data.data));

    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));

    let workTimeServie = new WorkTimeService();
    workTimeServie.getAll().then((result) => setWorkTimes(result.data.data));

    jobAdvertisementService
      .getAllByPageable(activePage, selectedCategory.key)
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  //pagination
  const handlePageChange = (event, { activePage }) => {
    setActivePage(activePage);
    jobAdvertisementService
      .getAllByPageable(activePage, selectedCategory.key)
      .then((result) => setJobAdvertisements(result.data.data));
    //console.log(activePage);
  };

  //pagination
  const handlePageSizeChange = (e) => {
    setPageSize(e.value.key)
    jobAdvertisementService
      .getAllByPageable(activePage, pageSize)
      .then((result) => setJobAdvertisements(result.data.data));
    //console.log(pageSize);
  };
  //console.log("pageno:" + pageNo)
  //Dropdown a ait key, text, value set etme işlemi
  const getCities = cities.map((city, index) => ({
    key: index,
    name: city.cityName,
    value: city.id,
  }));

  //Dropdown a ait key, text, value set etme işlemi
  const getWorkTimes = workTimes.map((workTime, index) => ({
    key: index,
    name: workTime.timeTypeName,
    value: workTime.id,
  }));

  const cityId = cities.map((city) => city.id);

  const [selectedCities, setselectedCities] = useState([]);
  const [selectedWorkTimes, setSelectedWorkTimes] = useState([]);
  //console.log(cityId);
  //console.log(selectedCities);

  let selectedCity = []; //Boş array
  /*selectedCities.map(  //selectedCities hooku checkboxdan gelen cityid verileri
    (cityId) =>
      (selectedCity = selectedCity.concat( //arrayleri birleştirme
        jobAdvertisements.filter(
          (jobAdvertisement) => jobAdvertisement.city.id === cityId
        )
      ))
  );*/

  let withFilterData = jobAdvertisements.filter((jobAdvertisement) =>
    selectedCities.includes(jobAdvertisement.city.id)
  );
  let withoutFilterData = jobAdvertisements;
  function handleData() {
    if (selectedCities.length === 0) {
      return withoutFilterData;
    } else {
      return withFilterData;
    }
  }

  let withWorkTimeFilterData = jobAdvertisements.filter((jobAdvertisement) =>
    selectedWorkTimes.includes(jobAdvertisement.workTime.id)
  );
  let withoutWorkTimeFilterData = jobAdvertisements;
  function handleDataWorkTime() {
    if (selectedWorkTimes.length === 0) {
      return withoutWorkTimeFilterData;
    } else {
      return withWorkTimeFilterData;
    }
  }

  console.log(withFilterData);
  //console.log(withWorkTimeFilterData);
  //console.log(_.intersection(withFilterData, withWorkTimeFilterData));
  // console.log(
  //   jobAdvertisements.filter((jobAdvertisement) =>
  //     selectedCities.includes(jobAdvertisement.city.id)
  //   )
  // );

  // console.log(
  //   jobAdvertisements.filter((jobAdvertisement) =>
  //     selectedWorkTimes.includes(jobAdvertisement.workTime.id)
  //   )
  // );

  // console.log(_.merge(withFilterData,withWorkTimeFilterData))
  //console.log(selectedRepresentative)
  //console.log("data:"+ cityid)

  // console.log(selectedCities);
  // console.log(selectedWorkTimes)

  //const newcity= jobAdvertisements.filter(jobAdvertisement=>jobAdvertisement.city.cityName===name)

  let newJobAdvertisementData = _.intersection(
    handleData(),
    handleDataWorkTime()
  ); 

  let jFavoriteJobAdversitement;
  const handleAddFavoriteJobAdvertisement = (jobAdvertisement) => {
    jFavoriteJobAdversitement = {
      candidate: { id: 63 },
      jobAdvertisement: { id: jobAdvertisement.id },
      createdDate: moment().format("YYYY-MM-DD"),
    };
    favoriteJobAdversitementService
      .add(jFavoriteJobAdversitement)
      .then((result) =>
        result.data.success ? handleErrorMessage(result.data.message) : ""
      );
  };
  const handleRemoveFavoriteJobAdvertisement = (jobAdvertisement) => {
    favoriteJobAdversitementService
      .delete(jobAdvertisement.id, 63)
      .then((result) =>
        result.data.success ? handleErrorMessage(result.data.message) : ""
      );
  };
  //console.log(favoriteJobAdversitements);
  const dispatch = useDispatch();
  // const handleRemoveFavorite = (status) => {
  //   dispatch(isEditedFavorite(status));
  // };

  const categories = [
    { name: "İkişer", key: "2" },
    { name: "Üçer", key: "3" },
    { name: "Dörder", key: "4" },
    { name: "Beşer", key: "5" },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  //console.log(selectedCategory.key)
  return (
    <div>
      <Segment placeholder>
        <Grid style={{ backgroundColor: "grey" }} celled>
          <Grid.Row>
            <Grid.Column width="4">
              <Segment>
                <MultiSelect
                  fixedPlaceholder
                  placeholder="Şehir Seçin"
                  optionValue="value"
                  value={selectedRepresentative}
                  options={getCities}
                  //itemTemplate={representativesItemTemplate}
                  onChange={(e) => (
                    setSelectedRepresentative(e.value),
                    setselectedCities(e.value)
                  )}
                  optionLabel="name"
                  className="multiselect-custom"
                />
              </Segment>
              <Segment>
                <MultiSelect
                  fixedPlaceholder
                  placeholder="Çalışma Zamanı Seçin"
                  optionValue="value"
                  value={selectedWorkTimeRepresentative}
                  options={getWorkTimes}
                  //itemTemplate={representativesItemTemplate}
                  onChange={(e) => (
                    setSelectedWorkTimeRepresentative(e.value),
                    setSelectedWorkTimes(e.value)
                  )}
                  optionLabel="name"
                  className="multiselect-custom"
                />
              </Segment>
              <Divider></Divider>
              <Segment>
                <Label>Sayfa Adeti Seçiniz:</Label>
              {categories.map((category) => (
                <div className="pageradiobtn">
                  <RadioButton
                  className="pageradiobtnstyle"
                    inputId={category.key}
                    name="category"
                    value={category}
                    onChange={((e) =>(setSelectedCategory(e.value),
                      
                      (jobAdvertisementService.getAllByPageable(activePage, e.value.key).then((result) => setJobAdvertisements(result.data.data)))
                    ))}
                    checked={selectedCategory.key === category.key}
                  />
                  <label htmlFor={category.key}>{category.name}</label>
                </div>
              ))}
              </Segment>
            </Grid.Column>
            <Grid.Column width="12">
              

              {newJobAdvertisementData.map((jobAdvertisement) => (
                <Segment>
                  <Card fluid>
                    <Card.Content>
                      <Image
                        size="mini"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                        floated="left"
                      />
                      <Card.Header className="jobadvertisementcardheader">
                        {_.startCase(
                          _.toLower(jobAdvertisement.jobPosition.positionName)
                        )}
                        {/* {favoriteJobAdversitement.find(r => r.jobAdvertisement.id === jobAdvertisement.id) === undefined ? <Rating onClick={()=>handleFavoriteJobAdvertisement(jobAdvertisement)} icon="heart" onRate={(event,data)=>console.log(data.rating)}></Rating> : <Rating icon="heart" ></Rating>}  */}

                        <Rating
                          className="favori"
                          icon="heart"
                          defaultRating={
                            favoriteJobAdversitements.find(
                              (favoriteJobAdversitement) =>
                                favoriteJobAdversitement.jobAdvertisement.id ===
                                jobAdvertisement.id
                            )
                              ? 1
                              : 0
                          }
                          onRate={(event, data) =>
                            data.rating === 1
                              ? handleAddFavoriteJobAdvertisement(
                                  jobAdvertisement
                                )
                              : handleRemoveFavoriteJobAdvertisement(
                                  jobAdvertisement
                                )
                          }
                        ></Rating>
                      </Card.Header>
                      <Card.Meta>
                        {jobAdvertisement.employeer.companyName}
                      </Card.Meta>
                      <Card.Meta>
                        {_.startCase(_.toLower(jobAdvertisement.city.cityName))}
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content className="cardgridinfo">
                      <Grid
                        columns="equal"
                        className="jobadvertisementgridbottominfo"
                      >
                        <Grid.Row className="jobadvertisementgridbottominforowgrid">
                          <Grid.Column floated="left" className="labelworktime">
                            <Label>
                              {jobAdvertisement.workTime.timeTypeName}
                            </Label>
                          </Grid.Column>
                          <Grid.Column
                            floated="right"
                            textAlign="right"
                            className="labelcreateddate"
                          >
                            <Card.Content>
                              <Label>
                                {moment(jobAdvertisement.createdDate)
                                  .endOf("day")
                                  .fromNow()}
                              </Label>
                            </Card.Content>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Content>
                  </Card>
                </Segment>
              ))}
              <Segment textAlign="center">
                <Pagination
                  boundaryRange={0}
                  defaultActivePage={1}
                  ellipsisItem={null}
                  firstItem={null}
                  lastItem={null}
                  siblingRange={2}
                  totalPages={10}
                  onPageChange={handlePageChange}
                />
              </Segment>

              {/* <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Job Position Name</Table.HeaderCell>
                    <Table.HeaderCell>Number Of Open Position</Table.HeaderCell>
                    <Table.HeaderCell>Şehir</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {jobAdvertisements
                    .filter((jobAdvertisement) =>
                      selectedCities.includes(jobAdvertisement.city.id)
                    )
                    .map((jobAdvertisement) => (
                      <Table.Row key={jobAdvertisement.id}>
                        <Table.Cell>
                          {jobAdvertisement.jobPosition.positionName}
                        </Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.numberOfOpenPositions}
                        </Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.city.cityName}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="5">
                      <Menu floated="right" pagination>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron left" />
                        </Menu.Item>
                        <Menu.Item as="a">1</Menu.Item>
                        <Menu.Item as="a">2</Menu.Item>
                        <Menu.Item as="a">3</Menu.Item>
                        <Menu.Item as="a">4</Menu.Item>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron right" />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
