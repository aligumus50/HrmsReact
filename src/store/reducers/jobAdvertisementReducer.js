import { UPDATE_TO_JOBADVERTISEMENT } from "../actions/jobAdvertisementActions";
import { jobAdvertisementValues } from "../initialValues/jobAdvertisementValues";

const initialState = {
    jobAdvertisementValues: jobAdvertisementValues,
};

export default function jobAdvertisementReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_JOBADVERTISEMENT:
      return payload;

    default:
      return state;
  }
}
