import { combineReducers } from 'redux'
import { GET_ALL_CATEGORY } from '../actions'

export const category = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_CATEGORY:
			return {
        ...state,
        ...action.categories
      }
		default:
			return state
	}
}

const reducer = combineReducers({
  category
})

export default reducer
