import * as actionTypes from './actionTypes';

export const createNewPost = payload => ({
  type: actionTypes.CREATE_NEW_POST,
  payload
});

export const clearNewPost = () => ({
  type: actionTypes.CLEAR_NEW_POST
});

export const createNewComment = payload => ({
  type: actionTypes.CREATE_NEW_COMMENT,
  payload
});
