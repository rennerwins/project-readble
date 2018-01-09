import * as actionTypes from '../actions/actionTypes';

const sort = (state = 'high', action) => {
  switch (action.type) {
    case actionTypes.SORT_BY_RECENT:
      return action.sort;

    case actionTypes.SORT_BY_SCORE:
      return action.sort;

    default:
      return state;
  }
};

export default sort;
