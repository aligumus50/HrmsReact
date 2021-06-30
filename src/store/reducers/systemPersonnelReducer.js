import { UPDATE_TO_PROFILE } from "../actions/systemPersonnelActions";
import { systemPersonnelValues } from "../initialValues/systemPersonnelValues";

const initialState = {
    systemPersonnelValues: systemPersonnelValues,
};

export default function systemPersonnelReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_PROFILE:
      return payload;

    default:
      return state;
  }
}
