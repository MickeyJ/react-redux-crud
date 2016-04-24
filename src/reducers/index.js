import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import CommentReducer from './reducer_comments'

export default combineReducers({
  comments: CommentReducer,
  form: formReducer
});
