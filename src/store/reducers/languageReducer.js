import { UPDATE_TO_LANGUAGE} from "../actions/languageActions";

import { languageValues } from "../initialValues/languageValues";

const initialState = {
    languageValues:languageValues,
};

export default function languageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_TO_LANGUAGE:
      return payload;

    default:
      return state;
  }
}
