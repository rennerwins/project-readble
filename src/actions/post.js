import api from '../api';
import * as actionTypes from './actionTypes';

// action creators
export const getAllPost = posts => ({
  type: actionTypes.GET_ALL_POST,
  posts
});

export const getPostsFromCategory = (category, posts) => ({
  type: actionTypes.GET_POSTS_FROM_CATEGORY,
  category,
  posts
});

export const getVotePost = (id, score) => ({
  type: actionTypes.GET_VOTE_POST,
  id,
  score
});

export const getPost = post => ({
  type: actionTypes.GET_POST,
  post
});

export const deletedPost = id => ({
  type: actionTypes.DELETE_POST,
  id
});

// ajax
export const fetchAllPost = () => (dispatch) => {
  api.getAllPost().then(({ data }) => {
    const openPost = data.filter(post => !post.deleted);
    dispatch(getAllPost(openPost));
  });
};

export const fetchPostsFromCategory = category => (dispatch) => {
  api.getPostsFromCategory(category).then(({ data }) => {
    dispatch(getPostsFromCategory(category, data));
  });
};

export const votePost = (id, option) => (dispatch) => {
  api.votePost(id, option).then(({ data }) => dispatch(getVotePost(data.id, data.voteScore)));
};

export const fetchPost = postID => (dispatch) => {
  api.getPost(postID).then(({ data }) => {
    if (data.id) {
      dispatch(getPost(data));
    }
  });
};

export const deletePost = postID => (dispatch) => {
  api.deletePost(postID).then(() => dispatch(deletedPost(postID)));
};
