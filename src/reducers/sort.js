import * as actionTypes from '../actions/actionTypes';

const sort = (state = 'high', action) => {
  switch (action.type) {
    case actionTypes.SORT_OPTION:
      return action.sort;

    default:
      return state;
  }
};

export default sort;
