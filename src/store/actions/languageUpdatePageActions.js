export const IS_EDITED_LANGUAGE="IS_EDITED_LANGUAGE"

export function isEditedLanguage(status){

    return{
        type: IS_EDITED_LANGUAGE,
        payload: status
    }
}
