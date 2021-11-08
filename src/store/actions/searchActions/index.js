function pushSearch(searchedItem){
    return {
        type: "UPDATE_SEARCHEDITEM",
        data: searchedItem
    }
}

function removeSearch(searchedItem){
    return {
        type: "REMOVE_SEARCHEDITEM",
        data: searchedItem
    }
}

export {
    pushSearch,
    removeSearch
}