import * as actionTypes from '../actions'

const categories = (state = {}, action ) => {
  switch(action.type){
    case actionTypes.GET_CATEGORIES:
    return {
      categories: action.categories
    }
    case actionTypes.GET_CATEGORY_POSTS:
    return {
      categoryPosts: action.categories
    }
  default:
  return state
  }
}

export default categories