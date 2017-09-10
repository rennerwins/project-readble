import { CLEAR_NEW_POST, CREATE_NEW_COMMENT } from '../actions/create'
import { EDIT_COMMENT } from '../actions/comment'

const initialCreateCommentState = {
	id: '',
	timestamp: '',
	body: '',
	author: '',
	parentId: '',
	editing: false
}

export const createComment = (state = initialCreateCommentState, action) => {
	switch (action.type) {
		case CREATE_NEW_COMMENT:
			return {
				...state,
				...action.payload
			}

		case EDIT_COMMENT:
			return {
				...state,
				id: action.id,
				editing: action.editing
			}

		case CLEAR_NEW_POST:
			return initialCreateCommentState

		default:
			return state
	}
}

export default createComment
