import api from '../api';
import { GET_ALL_CATEGORY } from './types';

export const getAllCategory = categories => ({
  type: GET_ALL_CATEGORY,
  categories,
});

export const fetchCategory = () => (dispatch) => {
  api.getAllCategory().then(categories => dispatch(getAllCategory(categories)));
};
