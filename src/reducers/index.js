import { combineReducers } from 'redux'
import { GET_ALL_CATEGORY, GET_ALL_POST, GET_POSTS_FROM_CATEGORY } from '../actions'

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
			return {
				...action.posts
			}
		}

		case GET_POSTS_FROM_CATEGORY: {
			return {
				...action.posts
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
