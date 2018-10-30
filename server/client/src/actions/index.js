import axios from 'axios';
import {FETCH_USER} from './types';
import {FETCH_UNITS} from './types';

// this one can be transformed to fit ES6 syntax (see fetchUserAction())
// export const fetchUserAuld = () => {
//     //dispatch is redux-thunk function
//     return function (dispatch) {
//         axios
//             .get('/api/current_user')
//             .then(res => dispatch(
//                 {
//                     type: FETCH_USER,
//                     payload: res.data
//                 }
//             ))
//     }
//
// };

export const fetchUserAction = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    //console.log(res.data);
    dispatch(
        {
            type: FETCH_USER,
            payload: res.data
        }
    );
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch(
        {
            type: FETCH_USER,
            payload: res.data
        }
    );

};

export const saveForm = (values, history) => async dispatch => {

    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');

    dispatch(
        {
            type: FETCH_USER,
            payload: res.data
        }
    );

};

export const fetchSurveys = () => async dispatch => {

    const res = await axios.get('/api/surveys');

    dispatch(
        {
            type: FETCH_UNITS,
            payload: res.data

        }
    );

};


