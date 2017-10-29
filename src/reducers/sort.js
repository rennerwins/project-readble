import { SORT_BY_RECENT, SORT_BY_SCORE } from '../actions/types';

const sort = (state = 'high', action) => {
  switch (action.type) {
    case SORT_BY_RECENT:
      return action.sort;

    case SORT_BY_SCORE:
      return action.sort;

    default:
      return state;
  }
};

export default sort;
