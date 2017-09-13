import _ from 'lodash'
import { GET_ALL_CATEGORY } from '../actions/types'

const category = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			const { categories } = action
			const category = _.mapKeys(categories, 'name')
			return {
				...state,
				...category
			}
		default:
			return state
	}
}

export default category
