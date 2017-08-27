import { combineReducers } from 'redux'
import {
	GET_ALL_CATEGORY,
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
	GET_VOTE_POST,
	SORT_BY_RECENT,
	SORT_BY_SCORE
} from '../actions'
import _ from 'lodash'

export const category = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			return {
				...state,
				...action.categories
			}
		default:
			return state
	}
}

export const post = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POST: {
			let posts = _.reverse(_.sortBy(action.posts, 'timestamp'))
			return _.mapKeys(posts, 'id')
		}

		case GET_POSTS_FROM_CATEGORY: {
			return _.mapKeys(action.posts, 'id')
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

		case SORT_BY_RECENT: {
			let sortByRecentPost
			action.sort === 'new'
				? (sortByRecentPost = _.reverse(_.sortBy(state, 'timestamp')))
				: (sortByRecentPost = _.sortBy(state, 'timestamp'))
			return _.mapKeys(sortByRecentPost, 'id')
		}

		case SORT_BY_SCORE: {
			let sortByScore
			action.sort === 'high'
				? (sortByScore = _.reverse(_.sortBy(state, 'voteScore')))
				: (sortByScore = _.sortBy(state, 'voteScore'))
			return _.mapKeys(sortByScore, 'id')
		}

		default:
			return state
	}
}

export const sort = (state = 'new', action) => {
	switch (action.type) {
		case SORT_BY_RECENT:
			return action.sort

		case SORT_BY_SCORE:
			return action.sort

		default:
			return state
	}
}

const reducer = combineReducers({
	category,
	post,
	sort
})

export default reducer
