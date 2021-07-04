import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import JobAdvertisementList from "../../pages/JobAdvertisementList";
import EmployeerDetail from "../../pages/EmployeerDetail";
import AddJobAdvertisement from "../../pages/AddJobAdvertisement";
import AddCandidate from "../../pages/AddCandidate";
import AddEmployeer from "../../pages/AddEmployeer";
import AddSystemPersonnel from "../../pages/AddSystemPersonnel";
import { Flip, ToastContainer } from "react-toastify";
import EmployeerJobAdvertisementList from "../../pages/EmployeerJobAdvertisementList";
import CurriculumVitaePreview from "../../pages/CurriculumVitaePreview";
import CurriculumVitae from "../../pages/CurriculumVitae";
import CandidateJobAdvertisementList from "../../pages/CandidateJobAdvertisementList";
import EditSystemPersonnel from "../../pages/EditSystemPersonnel";
import SystemPersonnel from "../../pages/SystemPersonnel";
import EditEmployeer from "../../pages/EditEmployeer";
import Employeer from "../../pages/Employeer";
import EmployeerProfileStatusForSystemPersonnel from "../../pages/EmployeerProfileStatusForSystemPersonnel";
import EmployeerProfileStatusVerification from "../../pages/EmployeerProfileStatusVerification";



export default function Dashboard() {
  return (
    <div>
      <ToastContainer
        transition={Flip}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/home" component={HomePage}></Route>
      <Route path="/jobadvertisement" component={JobAdvertisementList}></Route>

      {/*parametreler 2 noktayla gönderilir. */}
      <Route exact path="/employeer/:id" component={EmployeerDetail}></Route>

      <Route
        exact
        path="/addjobadvertisement"
        component={AddJobAdvertisement}
      ></Route>

      <Route exact path="/candidate/signup" component={AddCandidate}></Route>

      <Route exact path="/employer/signup" component={AddEmployeer}></Route>

      <Route exact path="/systempersonnel/signup" component={AddSystemPersonnel}></Route>

      <Route exact path="/systempersonnel/:id" component={SystemPersonnel}></Route>

      <Route exact path="/systempersonnel/:id/settings" component={EditSystemPersonnel}></Route>

      <Route exact path="/employer/:id/jobadvertisement" component={EmployeerJobAdvertisementList}></Route>

      <Route exact path="/candidate/:id/curriculumVitaePreview" component={CurriculumVitaePreview}></Route>

      <Route exact path="/candidate/:id/curriculumVitae/:id" component={CurriculumVitae}></Route>
      
      <Route exact path="/candidate/jobadvertisement" component={CandidateJobAdvertisementList}></Route>

      <Route exact path="/employeer/:id/" component={Employeer}></Route>
      <Route exact path="/employeer/:id/settings" component={EditEmployeer}></Route>

      <Route exact path="/systempersonnel/:id/employeerprofilestatus" component={EmployeerProfileStatusForSystemPersonnel}></Route>

      <Route exact path="/systempersonnel/:id/employeerprofilestatus/verification" component={EmployeerProfileStatusVerification}></Route>


     

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
      

      {/*<WorkTypeList></WorkTypeList>
      <WorkTimeDropList></WorkTimeDropList>*/}
    </div>
  );
}
