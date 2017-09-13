import { CREATE_NEW_POST, CLEAR_NEW_POST, CREATE_NEW_COMMENT } from './types'

export const createNewPost = payload => ({
	type: CREATE_NEW_POST,
	payload
})

export const clearNewPost = () => ({
	type: CLEAR_NEW_POST
})

export const createNewComment = payload => ({
	type: CREATE_NEW_COMMENT,
	payload
})
