import api from '../api';
import { GET_COMMENTS, GET_VOTE_COMMENT, EDIT_COMMENT } from './types';

// action creators
export const getComments = (id, comments) => ({
  type: GET_COMMENTS,
  id,
  comments,
});

export const getVoteComment = (id, score) => ({
  type: GET_VOTE_COMMENT,
  id,
  score,
});

export const editComment = (id, editing) => ({
  type: EDIT_COMMENT,
  id,
  editing,
});

// ajax
export const fetchComments = postID => (dispatch) => {
  api.getPostComments(postID).then(({ data }) => dispatch(getComments(postID, data)));
};

export const voteComment = (id, option) => (dispatch) => {
  api.voteComment(id, option).then(({ data }) => dispatch(getVoteComment(data.id, data.voteScore)));
};
