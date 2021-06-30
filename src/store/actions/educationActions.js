export const UPDATE_TO_EDUCATION="UPDATE_TO_EDUCATION"


export default function updateToEducation(education){

    return{
        type: UPDATE_TO_EDUCATION,
        payload: education
    }
}


