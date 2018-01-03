import axios from 'axios';
import { FETCH_USER, SUBMIT_PROFILE, FETCH_PROFILE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
};

export function submitProfile(values, id, callback) {
    const result = axios.post(`/api/profile/${id}`, values)
        .then(callback());
    //send to reducer
    return {
        type: SUBMIT_PROFILE,
        payload: result
    };
};

export function fetchProfile(id) {
    const result = axios.get(`/api/profile/${id}`)

    return {
        type: FETCH_PROFILE,
        payload: result
    };

};
