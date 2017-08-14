import axios from 'axios'
import * as categories from './categories'
import * as comments from './comments'
import * as posts from './posts'

let token = localStorage.token
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

axios.defaults.baseURL = 'http://localhost:5001'
axios.defaults.headers.common['Authorization'] = token
axios.defaults.headers.post['Content-Type'] =
	'application/x-www-form-urlencoded'

const api = {
  ...categories,
  ...comments,
  ...posts
}

export default api
