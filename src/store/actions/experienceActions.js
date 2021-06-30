export const UPDATE_TO_EXPERIENCE="UPDATE_TO_EXPERIENCE"


export default function updateToEducation(experience){

    return{
        type: UPDATE_TO_EXPERIENCE,
        payload: experience
    }
}
