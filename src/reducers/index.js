import { combineReducers } from 'redux'
import category from './category'
import post from './post'
import sort from './sort'
import {
	GET_COMMENTS,
	CREATE_NEW_POST,
	CLEAR_NEW_POST,
	GET_VOTE_COMMENT,
	CREATE_NEW_COMMENT
} from '../actions'
import _ from 'lodash'


export const comment = (state = {}, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			const { comments } = action
			const comment = _.reverse(_.sortBy(comments, 'voteScore'))
			return _.mapKeys(comment, 'id')

		case GET_VOTE_COMMENT: {
			return {
				...state,
				[action.id]: {
					...state[action.id],
					voteScore: action.score
				}
			}
		}

		// case SORT_BY_RECENT: {
		// 	let sortByRecentPost
		// 	action.sort === 'new'
		// 		? (sortByRecentPost = _.reverse(_.sortBy(state, 'timestamp')))
		// 		: (sortByRecentPost = _.sortBy(state, 'timestamp'))
		// 	return _.mapKeys(sortByRecentPost, 'id')
		// }

		// case SORT_BY_SCORE: {
		// 	let sortByScore
		// 	action.sort === 'high'
		// 		? (sortByScore = _.reverse(_.sortBy(state, 'voteScore')))
		// 		: (sortByScore = _.sortBy(state, 'voteScore'))
		// 	return _.mapKeys(sortByScore, 'id')
		// }

		default:
			return state
	}
}

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
