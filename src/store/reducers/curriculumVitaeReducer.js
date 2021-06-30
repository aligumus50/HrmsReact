import { UPDATE_TO_CURRICULUMVITAE } from "../actions/curriculumVitaeActions";
import { curriculumVitaeValues } from "../initialValues/curriculumVitaeValues";

const initialState = {
    curriculumVitaeValues: curriculumVitaeValues,
};

export default function curriculumVitaeReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_CURRICULUMVITAE:
      return payload;

    default:
      return state;
  }
}
