export const ADD_TO_FAVORITE="ADD_TO_FAVORITE"
export const REMOVE_TO_FAVORITE="REMOVE_TO_FAVORITE"

export function addToFavorite(jobAdvertisement){

    return{
        type: ADD_TO_FAVORITE,
        payload: jobAdvertisement
    }
}

export function removeToFavorite(jobAdvertisement){

    return{
        type: REMOVE_TO_FAVORITE,
        payload: jobAdvertisement
    }
}