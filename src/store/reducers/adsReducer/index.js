function adsReducer (state = {  }, action) {
    console.log("ads actions: ", action.data)
    switch (action.type){
        case 'UPDATE_ADS':{
            return {...state, ads: action.data}
        }
        default:{
            return state
        }
    }
}

export default adsReducer