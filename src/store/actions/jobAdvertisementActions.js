export const UPDATE_TO_JOBADVERTISEMENT="UPDATE_TO_JOBADVERTISEMENT"


export default function updateToJobAdvertisement(jobAdvertisement){

    return{
        type: UPDATE_TO_JOBADVERTISEMENT,
        payload: jobAdvertisement
    }
}
