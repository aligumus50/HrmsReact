export const IS_EDITED_CURRICULUMVITAE="IS_EDITED_CURRICULUMVITAE"

export default function isEditedCurriculumVitae(status){

    return{
        type: IS_EDITED_CURRICULUMVITAE,
        payload: status
    }
}
