import {combineReducer} from 'redux';
import SessionErrorsReducer from './session_errors_reducer';

export default combineReducer({
     session: SessionErrorsReducer
})
