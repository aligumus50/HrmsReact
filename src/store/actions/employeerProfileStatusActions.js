export const UPDATE_TO_PROFILE_STATUS="UPDATE_TO_PROFILE_STATUS"

export default function employeerProfileStatus(employeerProfile){

    return{
        type: UPDATE_TO_PROFILE_STATUS,
        payload: employeerProfile
    }
}
