import axios from 'axios'

export const GET_COMMENTS = 'GET_COMMENTS';
export const ADD_COMMENT= 'ADD_COMMENT';
export const DELETE_COMMENT= 'DELETE_COMMENT';

const API = '/comments';

export function getComments(){
  const request = axios.get(API);
  return{
    type: GET_COMMENTS,
    payload: request
  };
}

export function addComment(comment){
  const request = axios.post(API, comment);
  return{
    type: ADD_COMMENT,
    payload: request
  }
}

export function deleteComment(id){
  const request = axios.delete(`${API}/${id}`);
  return{
    type: DELETE_COMMENT,
    payload: request
  }
}


