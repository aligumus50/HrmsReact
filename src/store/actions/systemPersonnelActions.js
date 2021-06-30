export const UPDATE_TO_PROFILE="UPDATE_TO_PROFILE"

export default function updateToProfile(systemPersonnel){

    return{
        type: UPDATE_TO_PROFILE,
        payload: systemPersonnel
    }
}
