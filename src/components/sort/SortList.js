import React from 'react'
import SortOption from './SortOption'

const SortOptions = props => {
	const { sort, handleSortChange } = props
	return (
		<div className="form-inline">
			<p className="mr-3 mb-0"><strong>Sort by : </strong></p>

      <SortOption
				handleSortChange={handleSortChange}
				sort={sort}
				value="high"
				label="Highest Score"
			/>
      <SortOption
				handleSortChange={handleSortChange}
				sort={sort}
				value="low"
				label="Lowest Score"
			/>
			<SortOption
				handleSortChange={handleSortChange}
				sort={sort}
				value="new"
				label="Newest"
			/>
      <SortOption
				handleSortChange={handleSortChange}
				sort={sort}
				value="old"
				label="Oldest"
			/>
		</div>
	)
}

export default SortOptions
