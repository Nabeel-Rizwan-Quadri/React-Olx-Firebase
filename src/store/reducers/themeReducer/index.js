function reducer(state = { theme: "white" }, action) {
    switch (action.type){
        case 'UPDATE_THEME':{
            return {...state, theme:action.data}
        }

        default:{
            return state
        }
    }
}

export default reducer