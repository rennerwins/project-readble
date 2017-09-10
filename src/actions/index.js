import api from '../api'

export const GET_POST = 'GET_POST'
export const GET_COMMENTS = 'GET_COMMENTS'
export const CREATE_NEW_POST = 'CREATE_NEW_POST'
export const CLEAR_NEW_POST = 'CLEAR_NEW_POST'
export const GET_VOTE_COMMENT = 'GET_VOTE_COMMENT'
export const DELETE_POST = 'DELETE_POST'
export const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT'

export const voteComment = (id, option) => dispatch => {
	api
		.voteComment(id, option)
		.then(({ data }) => dispatch(getVoteComment(data.id, data.voteScore)))
}

export const getVoteComment = (id, score) => {
	return {
		type: GET_VOTE_COMMENT,
		id,
		score
	}
}

export const getPost = post => {
	return {
		type: GET_POST,
		post
	}
}

export const fetchPost = postID => dispatch => {
	api.getPost(postID).then(({ data }) => dispatch(getPost(data)))
}

export const getComments = (id, comments) => {
	return {
		type: GET_COMMENTS,
		id,
		comments
	}
}

export const fetchComments = postID => dispatch => {
	api
		.getPostComments(postID)
		.then(({ data }) => dispatch(getComments(postID, data)))
}

export const createNewPost = (section, payload) => {
	return {
		type: CREATE_NEW_POST,
		section,
		payload
	}
}

export const clearNewPost = () => {
	return {
		type: CLEAR_NEW_POST
	}
}

export const deletePost = postID => {
	return {
		type: DELETE_POST
	}
}

export const createNewComment = (section, payload) => {
	return {
		type: CREATE_NEW_COMMENT,
		section,
		payload
	}
}
