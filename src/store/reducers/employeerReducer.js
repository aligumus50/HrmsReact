import { UPDATE_TO_PROFILE } from "../actions/employeerActions";
import { employeerValues } from "../initialValues/employeerValues";

const initialState = {
    employeerValues: employeerValues,
};

export default function employeerReducer(
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
