import { combineReducers } from 'redux'
import category from './category'
import post from './post'
import sort from './sort'
import comment from './comment'
import {
	CREATE_NEW_POST,
	CLEAR_NEW_POST,
	CREATE_NEW_COMMENT
} from '../actions'
import _ from 'lodash'

const initialCreateState = {
	id: '',
	timestamp: '',
	title: '',
	body: '',
	author: '',
	category: 'react'
}

export const create = (state = initialCreateState, action) => {
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

const reducer = combineReducers({
	category,
	post,
	sort,
	create,
	comment,
	createComment
})

export default reducer
