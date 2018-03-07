import commentsReducer from './comments'
import postsReducer from './posts'
import categoriesReducer from './categories'
import {combineReducers} from 'redux'


const rootReducer = combineReducers({
  comments: commentsReducer,
  posts: postsReducer,
  categories: categoriesReducer
})

export default rootReducer