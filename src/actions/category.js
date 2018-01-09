import api from '../api';
import * as actionTypes from './actionTypes';

export const getAllCategory = categories => ({
  type: actionTypes.GET_ALL_CATEGORY,
  categories
});

export const fetchCategory = () => (dispatch) => {
  api.getAllCategory().then(categories => dispatch(getAllCategory(categories)));
};
