import {combineReducers} from 'redux';
import authReducer from './authReducer';
import unitsReducer from './unitsReducer';
import {reducer as reduxFormReducer} from 'redux-form';

export default combineReducers(
    {
        auth: authReducer,
        form: reduxFormReducer,
        units: unitsReducer
    }
);