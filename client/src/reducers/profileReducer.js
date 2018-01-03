import { SUBMIT_PROFILE, FETCH_PROFILE } from '../actions/types';

export default function (state = {}, action) {
    console.log('profile reducer======', action);
    switch (action.type) {
        case SUBMIT_PROFILE:
            return {
                ...state,
                profileData: action.payload
            }
        case FETCH_PROFILE:
            return action.payload; 
        default:
            return state;
    }
}