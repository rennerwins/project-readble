import api from '../api'

export const GET_ALL_CATEGORY = 'GET_ALL_CATEGORY'
export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_POSTS_FROM_CATEGORY = 'GET_POSTS_FROM_CATEGORY'

export const getAllCategory = categories => {
	return {
		type: GET_ALL_CATEGORY,
		categories
	}
}

export const fetchCategory = () => dispatch => {
	api.getAllCategory().then(categories => dispatch(getAllCategory(categories)))
}

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

export const fetchPostsFromCategory = (category) => dispatch => {
	api.getPostsFromCategory(category).then(({ data }) => dispatch(getPostsFromCategory(category, data)))
}
