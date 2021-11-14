import { getAllAds } from "../../../config/firebase"

function updateAds(){
  return async (dispatch) => {
  console.log("ads actions return:")

        const ads = await getAllAds()
        dispatch({
          type: 'UPDATE_ADS',
          data: ads
        })
      }
}

export {
    updateAds,
}