import axios from 'axios'

// GET /posts
// Get all of the posts. Useful for the main page when no category is selected.
export const getAllPost = async () => {
	const res = await axios.get(`/posts`)
	return res
}

// POST /posts
// Add a new post
export const createNewPost = async post => {
	if (post) {
		const { id, timestamp, title, body, owner, category } = post
		const res = await axios.post('/posts', {
			id,
			timestamp,
			title,
			body,
			owner,
			category
		})
		return res
	}
}

// GET /posts/:id
// Get the details of a single post
export const getPost = async id => {
	const res = await axios.get(`/posts/${id}`)
	console.log(res)
	return res
}

// POST /posts/:id
// Used for voting on a post
export const votePost = async (id, option) => {
	if (id) {
		if (option === 'upVote' || option === 'downVote') {
			const res = await axios.post(`/posts/${id}`, { option })
			return res
		}
	}
}

// PUT /posts/:id
// Edit the details of an existing post
export const editPost = async content => {
	if (content) {
		const { title, body, id } = content
		const res = await axios.put(`/posts/${id}`, {
			title,
			body
		})
		return res
	}
}

// DELETE /posts/:id
// Sets the deleted flag for a post to 'true'.
// Sets the parentDeleted flag for all child comments to 'true'.
export const deletePost = async id => {
	const res = await axios.delete(`/posts/${id}`)
	return res
}
