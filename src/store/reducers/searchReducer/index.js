function screenReducer (state = { searchedItem: "" }, action) {
    switch (action.type){
        case 'UPDATE_SEARCHEDITEM':{
            return {...state, searchedItem:action.data}
        }

        case 'REMOVE_SEARCHEDITEM':{
            return {...state, searchedItem: ""}
        }

        default:{
            return state
        }
    }
}

export default screenReducer