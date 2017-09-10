export const CREATE_NEW_POST = 'CREATE_NEW_POST'
export const CLEAR_NEW_POST = 'CLEAR_NEW_POST'
export const CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT'

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
export const createNewComment = (section, payload) => {
	return {
		type: CREATE_NEW_COMMENT,
		section,
		payload
	}
}
