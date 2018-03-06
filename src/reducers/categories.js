import * as actionTypes from '../actions'

const categories = (state = {}, action ) => {
  switch(action.type){
    case actionTypes.GET_CATEGORIES:
    return {
      categories: action.categories
    }
  default:
  return state
  }
}