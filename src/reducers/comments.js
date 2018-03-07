import * as actionTypes from '../actions/'

const comments = (state = {},action) => {

  switch(action.type){
    case actionTypes.GET_COMMENTS:
    return {
      ...state,
      comments: action.comments
    }
    default:
    return state
  }
}


export default comments