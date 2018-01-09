import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import { sortList, reverseSortList } from '../utils/utility';

const post = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POST: {
      const { posts } = action;
      const post = reverseSortList(posts, 'voteScore');
      // const post = _.reverse(_.sortBy(posts, 'voteScore'));
      const mapPost = _.mapKeys(post, 'id');
      return {
        ...mapPost
      };
    }

    case actionTypes.GET_POST: {
      return {
        [action.post.id]: action.post
      };
    }

    case actionTypes.GET_POSTS_FROM_CATEGORY: {
      const { posts } = action;
      const post = reverseSortList(posts, 'voteScore');
      const mapPost = _.mapKeys(post, 'id');
      return {
        ...mapPost
      };
    }

    case actionTypes.GET_VOTE_POST: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.score
        }
      };
    }

    case actionTypes.SORT_OPTION: {
      let sortList;

      if (action.sort === 'new') {
        sortList = _.reverse(_.sortBy(state, 'timestamp'));
      } else if (action.sort === 'old') {
        sortList = _.sortBy(state, 'timestamp');
      } else if (action.sort === 'high') {
        sortList = _.reverse(_.sortBy(state, 'voteScore'));
      } else if (action.sort === 'low') {
        sortList = _.sortBy(state, 'voteScore');
      }

      return _.mapKeys(sortList, 'id');
    }

    case actionTypes.DELETE_POST: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          deleted: true
        }
      };
    }

    default:
      return state;
  }
};

export default post;
