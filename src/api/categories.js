import axios from 'axios'

// GET /categories
// Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
export const getAllCategory = async () => {
	const res = await axios.get('/categories')
	const { categories } = res.data
	return categories
}

// GET /:category/posts
// Get all of the posts for a particular category
export const getPostsFromCategory = async category => {
	const res = await axios.get(`${category}/posts`)
	return res
}
