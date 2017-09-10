import api from '../api'

// actions
export const GET_COMMENTS = 'GET_COMMENTS'
export const GET_VOTE_COMMENT = 'GET_VOTE_COMMENT'

// action creators
export const getComments = (id, comments) => ({
	type: GET_COMMENTS,
	id,
	comments
})

export const getVoteComment = (id, score) => ({
	type: GET_VOTE_COMMENT,
	id,
	score
})

// ajax
export const fetchComments = postID => dispatch => {
	api
		.getPostComments(postID)
		.then(({ data }) => dispatch(getComments(postID, data)))
}

export const voteComment = (id, option) => dispatch => {
	api
		.voteComment(id, option)
		.then(({ data }) => dispatch(getVoteComment(data.id, data.voteScore)))
}
