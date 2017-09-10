import api from '../api'

export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_POSTS_FROM_CATEGORY = 'GET_POSTS_FROM_CATEGORY'
export const GET_VOTE_POST = 'GET_VOTE_POST'

export const getAllPost = posts => {
	return {
		type: GET_ALL_POST,
		posts
	}
}

export const fetchAllPost = () => dispatch => {
	api.getAllPost().then(({ data }) => dispatch(getAllPost(data)))
}

export const getPostsFromCategory = (category, posts) => {
	return {
		type: GET_POSTS_FROM_CATEGORY,
		category,
		posts
	}
}

export const fetchPostsFromCategory = category => dispatch => {
	api
		.getPostsFromCategory(category)
		.then(({ data }) => dispatch(getPostsFromCategory(category, data)))
}

export const votePost = (id, option) => dispatch => {
	api
		.votePost(id, option)
		.then(({ data }) => dispatch(getVotePost(data.id, data.voteScore)))
}

export const getVotePost = (id, score) => {
	return {
		type: GET_VOTE_POST,
		id,
		score
	}
}
