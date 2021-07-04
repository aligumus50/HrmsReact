import {IS_EDITED_LANGUAGE } from "../actions/languageUpdatePageActions";
import { isEditedLanguage } from "../initialValues/languageValues";

const initialState = {
    isEditedLanguage: isEditedLanguage,
 
};

export default function languageUpdatePageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case IS_EDITED_LANGUAGE:
      return payload;

    default:
      return state;
  }
}
