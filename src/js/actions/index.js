export const GET_SCORE = "GET_SCORE";
export const SET_REQUISITES = "SET_REQUISITES";
export const SET_SETTIGNS = "SET_SETTIGNS";
export const SET_BACK = "SET_BACK";
export const SET_NEW_TIME = "SET_NEW_TIME";
export const SET_TIME = "SET_TIME";
export const ARRAY_OF_SHIRTS_INIT = "ARRAY_OF_SHIRTS_INIT";
export const OBJECT_OF_SHIRTS_INIT = "OBJECT_OF_SHIRTS_INIT";
export const REMOVAL_OF_STATES = "REMOVAL_OF_STATES";
export const PUSH_TO_CHECK = "PUSH_TO_CHECK";
export const CHANGE_THE_ISCLICKED = "CHANGE_THE_ISCLICKED";
export const CLEAR_CHECK_ARRAY = "CLEAR_CHECK_ARRAY";
export const CHANGE_THE_VISIBILITY = "CHANGE_THE_VISIBILITY";
export const PAIRS_FOUND = "PAIRS_FOUND";
export const POST_MY_RESULT = "POST_MY_RESULT";
export const SET_UNMATCHED = "SET_UNMATCHED";


export const getScore = data => {
    return {
        type: GET_SCORE,
        payload: data
    }
}

export const setRequisites = (name, email) => {
    return {
        type: SET_REQUISITES,
        name: name,
        email: email
    }
}

export const setSettings = (width, height) => {
    return {
        type: SET_SETTIGNS,
        width: width,
        height: height,
    }
}

export const setBack = back => {
    return {
        type: SET_BACK,
        back: back
    }
}

export const setNewTime = currentTime => {
    return {
        type: SET_NEW_TIME,
        currentTime: currentTime
    }
}

export const setTime = () => {
    return {
        type: SET_TIME
    }
}

export const arrayOfShirtsInit = currentIndex => {
    return {
        type: ARRAY_OF_SHIRTS_INIT,
        currentIndex: currentIndex
    }
}

export const ObjectOfShirtsInit = (number) => {
    return {
        type: OBJECT_OF_SHIRTS_INIT,/* переделать этот экшен */
        lengthOfArray: number
    }
}

export const removalOfStates = () => {
    return {
        type: REMOVAL_OF_STATES
    }
}

export const pushToCheck = (number, name) => {
    return {
        type: PUSH_TO_CHECK,
        numberInArray: number,
        cardName: name
    }
}

export const changeTheIsClicked = (number) => {
    return {
        type: CHANGE_THE_ISCLICKED,
        indexInArray: number,
    }
}

export const clearCheckArray = () => {
    return {
        type: CLEAR_CHECK_ARRAY
    }
}

export const changeTheVisibility = (number) => {
    return {
        type: CHANGE_THE_VISIBILITY,
        indexInArray: number
    }
}

export const pairsFound = () => {
    return {
        type: PAIRS_FOUND
    }
}

export const postMyResult = (name, email, score) =>{
    return {
        type: POST_MY_RESULT,
        name: name,
        email: email,
        score: score
    }
}

export const setUnmatched = (number) => {
    return {
        type: SET_UNMATCHED,
        indexInArray: number,
    }
}