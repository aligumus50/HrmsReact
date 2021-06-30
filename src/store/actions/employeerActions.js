export const UPDATE_TO_PROFILE="UPDATE_TO_PROFILE"

export default function updateToProfile(employeer){

    return{
        type: UPDATE_TO_PROFILE,
        payload: employeer
    }
}
