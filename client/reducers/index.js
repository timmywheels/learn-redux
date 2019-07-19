import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux/src';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
    posts,
    comments,
    router: rootReducer
});

export default rootReducer;