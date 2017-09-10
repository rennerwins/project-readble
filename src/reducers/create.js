import { CREATE_NEW_POST, CLEAR_NEW_POST } from '../actions/create'

const initialCreateState = {
	id: '',
	timestamp: '',
	title: '',
	body: '',
	author: '',
	category: 'react'
}

const create = (state = initialCreateState, action) => {
	switch (action.type) {
		case CREATE_NEW_POST:
			return {
				...state,
				[action.section]: action.payload
			}

		case CLEAR_NEW_POST:
			return initialCreateState

		default:
			return state
	}
}

export default create