import { SORT_BY_RECENT, SORT_BY_SCORE } from './types'

export const sortByRecent = sort => ({
	type: SORT_BY_RECENT,
	sort
})

export const sortByScore = sort => ({
	type: SORT_BY_SCORE,
	sort
})
