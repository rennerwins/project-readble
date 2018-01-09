import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';
import { sortList, reverseSortList } from '../utils/utility';

const post = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POST: {
      const post = reverseSortList(action.posts, 'voteScore');
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
      let sort;

      if (action.sort === 'new') {
        sort = reverseSortList(state, 'timestamp');
      } else if (action.sort === 'old') {
        sort = sortList(state, 'timestamp');
      } else if (action.sort === 'high') {
        sort = reverseSortList(state, 'voteScore');
      } else if (action.sort === 'low') {
        sort = sortList(state, 'voteScore');
      }

      return _.mapKeys(sort, 'id');
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
