export const UPDATE_TO_CURRICULUMVITAE="UPDATE_TO_CURRICULUMVITAE"


export default function updateToCurriculumVitae(curriculumVitae){

    return{
        type: UPDATE_TO_CURRICULUMVITAE,
        payload: curriculumVitae
    }
}
