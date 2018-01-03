import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    //state keyword: to maintain state by reducer
    auth: authReducer,
    form: formReducer,
    profile: profileReducer
});