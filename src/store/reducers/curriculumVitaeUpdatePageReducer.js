import { IS_EDITED_CURRICULUMVITAE } from "../actions/curriculumVitaeUpdatePageActions";
import { isEditedCurriculumVitae } from "../initialValues/curriculumVitaeValues";

const initialState = {
  isEditedCurriculumVitae: isEditedCurriculumVitae,
};

export default function curriculumVitaeUpdatePageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case IS_EDITED_CURRICULUMVITAE:
      return payload;

    default:
      return state;
  }
}
