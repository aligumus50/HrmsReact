import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import JobAdvertisementList from "../../pages/JobAdvertisementList";
import EmployeerDetail from "../../pages/EmployeerDetail"
import AddJobAdvertisement from "../../pages/AddJobAdvertisement";
import AddCandidate from "../../pages/AddCandidate"
import AddEmployeer from "../../pages/AddEmployeer";
import AddSystemPersonnel from "../../pages/AddSystemPersonnel";
export default function Dashboard() {
  return (
    <div>

    <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/home" component={HomePage}></Route>
    <Route path ="/jobadvertisement" component={JobAdvertisementList}></Route>
    
    {/*parametreler 2 noktayla gönderilir. */}
    <Route exact path="/employeer/:id" component={EmployeerDetail} ></Route>

    <Route exact path="/addjobadvertisement" component={AddJobAdvertisement}></Route>

    <Route exact path="/candidate/signup" component={AddCandidate} ></Route>

    <Route exact path="/employer/signup" component={AddEmployeer}></Route>

    <Route exact path="/systempersonnel/signup" component={AddSystemPersonnel}></Route>
    
     {/* <JobPositionList></JobPositionList>
      <br></br>
      <EmployeerList></EmployeerList>
      <br></br>
      <CandidateList></CandidateList>
      <br></br>
      <JobPositionDropList></JobPositionDropList>

      <br></br>
      <CityDropList></CityDropList>

      <br></br>
      <JobAdvertisementList></JobAdvertisementList>
     <br></br>*/}
      {/*<CurriculumVitae></CurriculumVitae>*/}

      {/*<WorkTypeList></WorkTypeList>
      <WorkTimeDropList></WorkTimeDropList>*/}
      
    </div>
  );
}
