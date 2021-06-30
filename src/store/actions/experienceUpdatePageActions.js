export const IS_EDITED_EXPERIENCE="IS_EDITED_EXPERIENCE"

export function isEditedExperience(status){

    return{
        type: IS_EDITED_EXPERIENCE,
        payload: status
    }
}
