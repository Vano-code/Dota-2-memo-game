import { SET_SETTIGNS, SET_BACK } from './../actions/index';

export default (state = {}, action) => {
    if(action.type === SET_SETTIGNS){
        const newObj = {...state};
        newObj.width = action.width;
        newObj.height = action.height;
        return newObj;
    }else if(action.type === SET_BACK){
        const newObg = {...state};
        newObg.back = action.back;
        return newObg;
    }
    return state
}