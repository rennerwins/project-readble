import * as actionTypes from './actionTypes';

export const sortByRecent = sort => ({
  type: actionTypes.SORT_BY_RECENT,
  sort
});

export const sortByScore = sort => ({
  type: actionTypes.SORT_BY_SCORE,
  sort
});
