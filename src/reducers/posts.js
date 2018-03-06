import * as actionType from '../actions'

const posts = (state ={}, action) => {
  switch(action.type){
    case actionType.GET_POSTS:
    return {
      posts: action.posts
    }
    default:
    return state
  }
}

export default posts