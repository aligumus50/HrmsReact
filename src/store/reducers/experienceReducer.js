import { UPDATE_TO_EXPERIENCE } from "../actions/experienceActions";
import { experienceValues } from "../initialValues/experienceValues";

const initialState = {
    experienceValues: experienceValues,
};

export default function experienceReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_EXPERIENCE:
      return payload;

    default:
      return state;
  }
}
