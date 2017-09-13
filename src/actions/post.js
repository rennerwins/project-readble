import api from '../api'
import {
	GET_ALL_POST,
	GET_POSTS_FROM_CATEGORY,
	GET_VOTE_POST,
	GET_POST
} from './types'

// action creators
export const getAllPost = posts => ({
	type: GET_ALL_POST,
	posts
})

export const getPostsFromCategory = (category, posts) => ({
	type: GET_POSTS_FROM_CATEGORY,
	category,
	posts
})

export const getVotePost = (id, score) => ({
	type: GET_VOTE_POST,
	id,
	score
})

export const getPost = post => ({
	type: GET_POST,
	post
})

// ajax
export const fetchAllPost = () => dispatch => {
	api.getAllPost().then(({ data }) => dispatch(getAllPost(data)))
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

export const fetchPost = postID => dispatch => {
	api.getPost(postID).then(({ data }) => {
		dispatch(getPost(data))
	})
}
