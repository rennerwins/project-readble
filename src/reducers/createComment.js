import { CLEAR_NEW_POST, CREATE_NEW_COMMENT } from '../actions/create'

const initialCreateCommentState = {
	id: '',
	timestamp: '',
	body: '',
	author: '',
	parentId: ''
}

export const createComment = (state = initialCreateCommentState, action) => {
	switch (action.type) {
		case CREATE_NEW_COMMENT:
			return {
				...state,
				[action.section]: action.payload
			}

		case CLEAR_NEW_POST:
			return initialCreateCommentState

		default:
			return state
	}
}

export default createComment
