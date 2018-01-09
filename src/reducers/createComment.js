import * as actionTypes from '../actions/actionTypes';

const initialCreateCommentState = {
  id: '',
  timestamp: '',
  body: '',
  author: '',
  parentId: '',
  editing: false
};

const createComment = (state = initialCreateCommentState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_COMMENT:
      return {
        ...state,
        ...action.payload
      };

    case actionTypes.EDIT_COMMENT:
      return {
        ...state,
        id: action.id,
        editing: action.editing
      };

    case actionTypes.CLEAR_NEW_POST:
      return initialCreateCommentState;

    default:
      return state;
  }
};

export default createComment;
