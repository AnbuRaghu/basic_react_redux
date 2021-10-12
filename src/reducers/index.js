import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
  posts: postReducer //we name as our postreducer as post
});
