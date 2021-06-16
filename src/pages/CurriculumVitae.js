import React, { useState } from "react";
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import EducationList from "../pages/EducationList";
import ExperienceList from "../pages/ExperienceList";
import CurriculumVitaeEdit from "./CurriculumVitaeEdit";
import EducationListEdit from "./EducationListEdit";
import EducationEdit from "./EducationListEdit";
import ExperienceListEdit from "./ExperienceListEdit";
import LanguageList from "./LanguageList";
import LanguageListEdit from "./LanguageListEdit";

export default function CurriculumVitae() {
  const [isEditedCurriculumVitae, setIsEditedProfile] = useState(true);

  function handleEditProfile() {
    setIsEditedProfile(false)
  }
  function handleSaveProfile() {
    setIsEditedProfile(true)
  }

  const [isEditedEducation, setIsEditedEducation] = useState(true);

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
  }

  return (
    <div>
      <div>
        {isEditedCurriculumVitae ? <CurriculumVitaeList edit={handleEditProfile}/> : <CurriculumVitaeEdit save={handleSaveProfile}/>}
      </div>
      <div style={{ marginTop: "20px" }}>
      {isEditedEducation ?<EducationList edit={handleEditEducation}/>:<EducationListEdit save={handleSaveEducation}/>}
      </div>

      <div style={{ marginTop: "20px" }}>
      {isEditedExperience ?<ExperienceList edit={handleEditExperience}/>:<ExperienceListEdit save={handleSaveExperience}/>}
      </div>

      <div style={{ marginTop: "20px" }}>
      {isEditedLangugae ?<LanguageList edit={handleEditLangugae}/>:<LanguageListEdit save={handleSaveLangugae}/>}
    
      </div>
    </div>
  );
}
