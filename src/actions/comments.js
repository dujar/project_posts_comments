import axiosInstance from '../axiosInstance'
import uuid from 'uuid/v4'
import {getPostsAsync} from './posts'
export const GET_COMMENTS = 'GET_COMMENTS'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENTS'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const VOTE_POST = 'VOTE_POST'



export function voteCommentAsync(vote,comment){
  return dispatch => {
    axiosInstance.put(`/comments/${comment.id}`,{
      option: vote
    })
    .then(resp => dispatch(getCommentsAsync()))
  }
}

export function deleteComment(comment){
  return {
    type: DELETE_COMMENT,
    comment
  }
}

export function deleteCommentAsync(comment){
  return dispatch => {
    axiosInstance.delete(`/comments/${comment.id}`)
      .then(resp => dispatch(getPostsAsync(comment.parentId)))
  }
}

export function updateComment(comment){
  return{
    type: UPDATE_COMMENT,
    comment
  }
}

export function updateCommentAsync(comment){
  return dispatch =>{
    axiosInstance.put(`/comments/${comment.id}`,{
      timestamp: new Date().valueOf(),
      body: comment.body
    })
    .then(resp => dispatch(getCommentsAsync(comment.parentId)))
  }
}
export function getComments(comments){
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function getCommentsAsync(postId){
  return dispatch=> {
    axiosInstance.get(`/posts/${postId}/comments`)
      .then(resp => dispatch(getComments(resp.data)))
  }
}


export function addComment(comment){
  return {
    type: ADD_COMMENT,
    comment
  }
}

export function addCommentAsync(comment){
  return dispatch => {
    axiosInstance.post("/comments",{
      id: uuid(),
      timestamp: new Date().valueOf(),
      body: comment.body,
      parentId: comment.parentId
    } )
    .then(resp => dispatch(getPostsAsync()))
    .then(resp => dispatch(getCommentsAsync()))
  }
}