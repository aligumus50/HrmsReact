import { UPDATE_TO_EDUCATION } from "../actions/educationActions";
import { educationValues } from "../initialValues/educationValues";

const initialState = {
  educationValues: educationValues,
};

export default function educationReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_EDUCATION:
      return payload;

    default:
      return state;
  }
}
