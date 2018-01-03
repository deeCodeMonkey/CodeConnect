import { SUBMIT_PROFILE, FETCH_PROFILE } from '../actions/types';

export default function (state = {}, action) {
    console.log('profile reducer: action recieved:======', action);
    switch (action.type) {
        case SUBMIT_PROFILE:
            return action.payload.data
        case FETCH_PROFILE:
            return action.payload.data 
        default:
            return state;
    }
}