export const IS_EDITED_FAVORITE="IS_EDITED_FAVORITE"

export function isEditedFavorite(status){

    return{
        type: IS_EDITED_FAVORITE,
        payload: status
    }
}