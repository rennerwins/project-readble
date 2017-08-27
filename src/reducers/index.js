import { combineReducers } from 'redux'
import {
	GET_ALL_CATEGORY,
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
	GET_VOTE_POST
} from '../actions'

export const category = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			return {
				...action.categories
			}
		default:
			return state
	}
}

export const post = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POST: {
			let posts = action.posts.reduce((obj, action) => {
				obj[action.id] = action
				return obj
			}, {})

			return {
				...posts
			}
		}

		case GET_POSTS_FROM_CATEGORY: {
			return {
				...action.posts
			}
		}

		case GET_VOTE_POST: {
			return {
				...state,
				[action.id]: {
					...state[action.id],
					voteScore: action.score
				}
			}
		}

		default:
			return state
	}
}

const reducer = combineReducers({
	category,
	post
})

export default reducer
