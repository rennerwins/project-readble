import _ from 'lodash';

export const sortList = (list, type) => {
  const sort = _.sortBy(list, type);

  return sort;
};

export const reverseSortList = (list, type) => {
  const sort = _.reverse(sortList(list, type));

  return sort;
};
