import React from 'react'
import SortOption from './SortOption'
import PropTypes from 'prop-types'

const SortList = ({ sort, handleSortChange }) => {
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

SortList.propTypes = {
	sort: PropTypes.string.isRequired,
	handleSortChange: PropTypes.func.isRequired
}

export default SortList
