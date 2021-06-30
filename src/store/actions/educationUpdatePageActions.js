export const IS_EDITED_EDUCATION="IS_EDITED_EDUCATION"

export function isEditedEducation(status){

    return{
        type: IS_EDITED_EDUCATION,
        payload: status
    }
}
