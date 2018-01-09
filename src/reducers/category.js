import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const category = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORY:
      const { categories } = action;
      const category = _.mapKeys(categories, 'name');
      return {
        ...state,
        ...category
      };

    default:
      return state;
  }
};

export default category;
