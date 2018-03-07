import axiosInstance from '../axiosInstance'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'


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

export function getCategoryPosts(categories){
  return {
    type: GET_CATEGORY_POSTS,
    categories
  }
}

export function getCategoryPostsAsync(categoryName){
  return dispatch => {
    axiosInstance.get(`/${categoryName}/posts`)
      .then(resp => dispatch(getCategoryPosts(resp.data)))
  }
}
