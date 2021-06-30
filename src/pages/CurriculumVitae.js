import React, { useState } from "react";
import { Segment } from "semantic-ui-react";
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import EducationList from "../pages/EducationList";
import ExperienceList from "../pages/ExperienceList";
import CurriculumVitaeEdit from "./CurriculumVitaeEdit";
import EducationListEdit from "./EducationListEdit";
import ExperienceListEdit from "./ExperienceListEdit";
import LanguageList from "./LanguageList";
import LanguageListEdit from "./LanguageListEdit";
import "../css/curriculumvitae.css"
import {  useSelector } from "react-redux";
export default function CurriculumVitae() {
  const [isEditedCurriculumVitae, setIsEditedProfile] = useState(true);

  //const educationValues = useSelector(state => state.education)

  const isEditedUpdateEducation = useSelector(state => state.educationUpdatePage)

  const isEditedUpdateExperience = useSelector(state => state.experienceUpdatePage)

  const isEditedUpdateLanguage = useSelector(state => state.languageUpdatePage)

  const isEditedUpdateCurriculumVitae = useSelector(state => state.curriculumVitaeUpdatePage)

  //console.log("uzunluk:" + educationValues.length)
  function handleEditProfile() {
    setIsEditedProfile(false)
  }
  function handleSaveProfile() {
    setIsEditedProfile(true)
  }

  /*const [isEditedEducation, setIsEditedEducation] = useState(true);

  function handleEditEducation() {
    setIsEditedEducation(false)
  }
  function handleSaveEducation() {
    setIsEditedEducation(true)
  }

  const [isEditedExperience, setIsEditedExperience] = useState(true);

  function handleEditExperience() {
    setIsEditedExperience(false)
  }
  function handleSaveExperience() {
    setIsEditedExperience(true)
  }

  const [isEditedLangugae, setIsEditedLangugae] = useState(true);

  function handleEditLangugae() {
    setIsEditedLangugae(false)
  }
  function handleSaveLangugae() {
    setIsEditedLangugae(true)
  }*/

 
  
  return (
    <div>
      
      <Segment size="big" className="cvheader"></Segment>
      <Segment className="cvprofileheader">
      <div>
         {/* {isEditedCurriculumVitae ? <CurriculumVitaeList edit={handleEditProfile}/> : <CurriculumVitaeEdit save={handleSaveProfile}/>}  */}
      
         {isEditedUpdateCurriculumVitae===false?<CurriculumVitaeEdit />:<CurriculumVitaeList/>} 
      </div>
      <div style={{ marginTop: "20px" }}>
      {/* {isEditedEducation ?<EducationList edit={handleEditEducation} />:<EducationListEdit save={handleSaveEducation}/>}  */}
       {isEditedUpdateEducation===false?<EducationListEdit />:<EducationList/>} 
      </div>

      <div style={{ marginTop: "20px" }}>
      {/* {isEditedExperience ?<ExperienceList edit={handleEditExperience}/>:<ExperienceListEdit save={handleSaveExperience}/>} */} 
      {isEditedUpdateExperience===false?<ExperienceListEdit/>:<ExperienceList/>}
      </div>

      <div style={{ marginTop: "20px" }}>
      {/* {isEditedLangugae ?<LanguageList edit={handleEditLangugae} />:<LanguageListEdit save={handleSaveLangugae}/>} */}
      {isEditedUpdateLanguage===false?<LanguageListEdit/>:<LanguageList/>}
      </div></Segment>
    </div>
  );
}
