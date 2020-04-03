import { combineReducers } from 'redux';
import jobs from './reducers';

const rootReducers = combineReducers({
    jobs
});

export default rootReducers;