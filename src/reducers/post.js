import _ from 'lodash'
import {
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
  GET_VOTE_POST,
  SORT_BY_RECENT,
	SORT_BY_SCORE,
} from '../actions/post'

const post = (state = {}, action) => {
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

		default:
			return state
	}
}

export default post
