import axios from 'axios'

// GET /posts/:id/comments
// Get all the comments for a single post
export const getPostComments = async postId => {
	const res = await axios.get(`/posts/${postId}/comments`)
	return res
}

// POST /comments
// Add a comment to a post
export const createNewComment = async comment => {
	if (comment) {
		const { id, timestamp, body, owner, parentId } = comment
		const res = await axios.post(`/comments`, {
			id,
			timestamp,
			body,
			owner,
			parentId
		})
		return res
	}
}

// GET /comments/:id
// Get the details for a single comment
export const getComment = async commentId => {
	const res = await axios.get(`/comments/${commentId}`)
	return res
}

// POST /comments/:id
// Used for voting on a comment.
export const voteComment = async (commentId, option) => {
	if (commentId) {
		if (option === 'upVote' || option === 'downVote') {
			const res = await axios.post(`/comments/${commentId}`, { option })
			return res
		}
	}
}

// PUT /comments/:id
// Edit the details of an existing comment
export const editComment = async comment => {
	if (comment) {
		const { timestamp, body, commentId } = comment
		const res = await axios.put(`/comments/${commentId}`, {
			timestamp,
			body
		})
		return res
	}
}

// DELETE /comments/:id
// Sets a comment's deleted flag to 'true'
export const deleteComment = async commentId => {
	const res = await axios.delete(`/comments/${commentId}`)
	console.log(res)
}
