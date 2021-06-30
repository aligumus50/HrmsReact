export const UPDATE_TO_LANGUAGE="UPDATE_TO_LANGUAGE"


export default function updateToLanguage(language){

    return{
        type: UPDATE_TO_LANGUAGE,
        payload: language
    }
}
