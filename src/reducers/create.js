import * as actionTypes from '../actions/actionTypes';

const initialCreateState = {
  id: '',
  timestamp: '',
  title: '',
  body: '',
  author: '',
  category: 'react'
};

const create = (state = initialCreateState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_POST:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.CLEAR_NEW_POST:
      return initialCreateState;

    default:
      return state;
  }
};

export default create;
