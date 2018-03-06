import axiosInstance from '../axiosInstance'
import uuid from 'uuid/v4'

export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'


export function votePostAsync(vote,postId){
  return dispatch => {
    axiosInstance.put(`/posts/${postId}`,{
      option: vote
    })
    .then(resp => dispatch(getPostsAsync()))
  }
}

export function deletePost(post){
  return {
    type: DELETE_POST,
    post
  }
}

export function deletePostAsync(post){
  return dispatch => {
    axiosInstance.delete(`/posts/${post.id}`)
      .then(resp => dispatch(getPostsAsync()))
  }
}

export function updatePost(post){
  return{
    type: UPDATE_POST,
    post
  }
}

export function updatePostAsync(post){
  return dispatch =>{
    axiosInstance.put(`/posts/${post.id}`,{
      timestamp: new Date().valueOf(),
      ...post
    })
    .then(resp => dispatch(getPostsAsync()))
  }
}
export function getPosts(posts){
  return {
    type: GET_POSTS,
    posts
  }
}

export function getPostsAsync(){
  return dispatch=> {
    axiosInstance.get(`/posts`)
      .then(resp => dispatch(getPosts(resp.data)))
  }
}


export function addPost(post){
  return {
    type: ADD_POST,
    post
  }
}

export function addPostAsync(post){
  return dispatch => {
    axiosInstance.pt(`/post`, {
      id: uuid(),
      timestamp: new Date().valueOf(),
      ...post
    } )
    .then(resp => dispatch(getPostsAsync()))
  }
}