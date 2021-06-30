import { combineReducers } from "redux";
import curriculumVitaeReducer from "./reducers/curriculumVitaeReducer";
import curriculumVitaeUpdatePageReducer from "./reducers/curriculumVitaeUpdatePageReducer";
import educationReducer from "./reducers/educationReducer";
import educationUpdatePageReducer from "./reducers/educationUpdatePageReducer";
import employeerReducer from "./reducers/employeerReducer";
import experienceReducer from "./reducers/experienceReducer";
import experienceUpdatePageReducer from "./reducers/experienceUpdatePageReducer";
import favoriteUpdateButtonReducer from "./reducers/favoriteUpdateButtonReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import languageReducer from "./reducers/languageReducer";
import languageUpdatePageReducer from "./reducers/languageUpdatePageReducer";
import systemPersonnelReducer from "./reducers/systemPersonnelReducer";


const rootReducer = combineReducers({

    education : educationReducer,
    educationUpdatePage : educationUpdatePageReducer,
    experience : experienceReducer,
    experienceUpdatePage : experienceUpdatePageReducer,
    language:languageReducer,
    languageUpdatePage:languageUpdatePageReducer,
    systemPersonnelUpdateProfile: systemPersonnelReducer,
    favoriteUpdateButton: favoriteUpdateButtonReducer,
    jobAdvertisement : jobAdvertisementReducer,
    employeerUpdateProfile: employeerReducer,
    curriculumVitae: curriculumVitaeReducer,
    curriculumVitaeUpdatePage:curriculumVitaeUpdatePageReducer

})

export default rootReducer;