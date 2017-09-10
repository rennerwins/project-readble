import { combineReducers } from 'redux'
import {
	GET_ALL_CATEGORY,
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
	GET_VOTE_POST,
	SORT_BY_RECENT,
	SORT_BY_SCORE,
	GET_POST,
	GET_COMMENTS,
	CREATE_NEW_POST,
	CLEAR_NEW_POST,
	GET_VOTE_COMMENT,
	CREATE_NEW_COMMENT
} from '../actions'
import _ from 'lodash'

export const category = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			const { categories } = action
			const category = _.mapKeys(categories, 'name')
			return {
				...state,
				...category
			}
		default:
			return state
	}
}

export const post = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POST: {
			const { posts } = action
			const post = _.reverse(_.sortBy(posts, 'voteScore'))
			const mapPost = _.mapKeys(post, 'id')
			return {
				...mapPost
			}
		}

		case GET_POSTS_FROM_CATEGORY: {
			const { posts } = action
			const post = _.reverse(_.sortBy(posts, 'voteScore'))
			const mapPost = _.mapKeys(post, 'id')
			return {
				...mapPost
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

		case GET_POST: {
			return {
				[action.post.id]: action.post
			}
		}

		default:
			return state
	}
}

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

export const sort = (state = 'high', action) => {
	switch (action.type) {
		case SORT_BY_RECENT:
			return action.sort

		case SORT_BY_SCORE:
			return action.sort

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
