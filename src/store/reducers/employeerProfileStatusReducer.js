import { UPDATE_TO_PROFILE_STATUS } from "../actions/employeerProfileStatusActions";
import { employeerProfileStatusValues } from "../initialValues/employeerProfileStatusValues";

const initialState = {
    employeerProfileStatusValues: employeerProfileStatusValues,
};

export default function employeerProfileStatusReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_PROFILE_STATUS:
      return payload;

    default:
      return state;
  }
}
