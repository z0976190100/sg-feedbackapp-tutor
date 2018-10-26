import {FETCH_USER} from '../actions/types';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_USER:
           return action.payload || false;
           //  console.log(action.payload._id);
           //  let result;
           //  if (action.payload._id !== ""){ result = action.payload;}
           //  result = false;
           //  console.log('result');
           //  console.log(result);
           //  return result;
        default:
            return state;
    }
}