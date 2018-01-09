import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const comment = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENTS: {
      const { comments } = action;
      const comment = _.reverse(_.sortBy(comments, 'voteScore'));
      return _.mapKeys(comment, 'id');
    }

    case actionTypes.GET_VOTE_COMMENT: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          voteScore: action.score
        }
      };
    }

    case actionTypes.SORT_OPTION: {
      let sortComment;

      action.sort === 'new'
        ? (sortComment = _.reverse(_.sortBy(state, 'timestamp')))
        : (sortComment = _.sortBy(state, 'timestamp'));

      action.sort === 'high'
        ? (sortComment = _.reverse(_.sortBy(state, 'voteScore')))
        : (sortComment = _.sortBy(state, 'voteScore'));

      return _.mapKeys(sortComment, 'id');
    }

    default:
      return state;
  }
};

export default comment;
