import axiosInstance from '../axiosInstance'
export const GET_CATEGORIES = 'GET_CATEGORIES'


export function getCategories(categories){
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export function getCategoriesAsync(){
  return dispatch => {
    axiosInstance.get("/categories")
      .then(resp => dispatch(getCategories(resp.data)))
  }

}