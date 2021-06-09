import React from 'react'
import CurriculumVitaeList from "../pages/CurriculumVitaeList";
import EducationList from '../pages/EducationList';
import ExperienceList from '../pages/ExperienceList';
import LangugageList from './LangugageList';

export default function CurriculumVitae() {
    return (
        <div>
            <div>
               <CurriculumVitaeList></CurriculumVitaeList>
            
            </div>
            <div style={{marginTop:"20px"}}>
                <EducationList></EducationList> 
            </div>

            <div style={{marginTop:"20px"}}>
                <ExperienceList></ExperienceList> 
            </div>

            <div style={{marginTop:"20px"}}>
                <LangugageList></LangugageList> 
            </div>

            
        </div>
    )
}
