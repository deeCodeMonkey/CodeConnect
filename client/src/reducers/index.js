import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    //state keyword: to maintain state by reducer
    auth: authReducer,
    form: formReducer
});