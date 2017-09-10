import _ from 'lodash'
import { GET_COMMENTS, GET_VOTE_COMMENT, } from '../actions/comment'
import { SORT_BY_RECENT, SORT_BY_SCORE } from '../actions/sort'

const comment = (state = {}, action) => {
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

export default comment
