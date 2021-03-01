import { SET_REQUISITES } from './../actions/index';

export default (state = {} , action) => {
    if(action.type === SET_REQUISITES){
        return {
            name: action.name,
            email: action.email
        }
    }
    return state
}