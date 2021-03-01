import { GET_SCORE } from './../actions/index';

export default (state = {} , action) => {
    if(action.type === GET_SCORE) return action.payload
    return state
}