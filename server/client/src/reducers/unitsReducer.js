import {FETCH_UNITS} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_UNITS:
            return action.payload || false;

        default:
            return state;
    }
}