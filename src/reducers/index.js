import { combineReducers } from 'redux'
import category from './category'
import post from './post'
import sort from './sort'
import comment from './comment'
import create from './create'
import createComment from './createComment'

const reducer = combineReducers({
	category,
	post,
	sort,
	create,
	comment,
	createComment
})

export default reducer
