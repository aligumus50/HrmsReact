import { IS_EDITED_EDUCATION } from "../actions/educationUpdatePageActions";
import {isEditedEducation } from "../initialValues/educationValues";

const initialState = {
    isEditedEducation: isEditedEducation,
};

export default function educationUpdatePageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case IS_EDITED_EDUCATION:
      return payload;

    default:
      return state;
  }
}
