import * as actionType from '../actions'

const posts = (state ={}, action) => {
  switch(action.type){
    case actionType.GET_POSTS:
    return {
      ...state,
      posts: action.posts
    }
    case actionType.GET_POST:
    return {
      ...state,
      post: action.post
    }
    default:
    return state
  }
}

export default posts