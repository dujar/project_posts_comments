import commentsReducer from './comments'
import postsReducer from './posts'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer
})

export default rootReducer