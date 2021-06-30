import {IS_EDITED_EXPERIENCE } from "../actions/experienceUpdatePageActions";
import {isEditedExperience } from "../initialValues/experienceValues";

const initialState = {
    isEditedExperience: isEditedExperience,
};

export default function experienceUpdatePageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case IS_EDITED_EXPERIENCE:
      return payload;

    default:
      return state;
  }
}
