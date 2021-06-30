
import {  IS_EDITED_FAVORITE } from "../actions/favoriteUpdateButtonActions";
import { isEditedFavorite } from "../initialValues/favoriteButtonValues";

const initialState = {
    isEditedFavorite: isEditedFavorite,
};

export default function favoriteUpdateButtonReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case IS_EDITED_FAVORITE:
      return payload;

    default:
      return state;
  }
}
