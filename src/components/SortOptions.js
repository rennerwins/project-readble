import React from 'react'

const SortOptions = props => {
	const { sort, handleSortChange } = props
	return (
		<div className="form-inline">
			<h5 className="mr-3">Sort by : </h5>
			<div className="form-check form-check-inline">
				<label className="form-check-label">
					<input
						className="form-check-input"
						type="radio"
						selected
						name="inlineRadioOptions"
						onChange={handleSortChange}
						checked={sort === 'new'}
						value="new"
					/>{' '}
					Newest
				</label>
			</div>
			<div className="form-check form-check-inline">
				<label className="form-check-label">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						onChange={handleSortChange}
						checked={sort === 'old'}
						value="old"
					/>{' '}
					Oldest
				</label>
			</div>
			<div className="form-check form-check-inline">
				<label className="form-check-label">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						onChange={handleSortChange}
						checked={sort === 'high'}
						value="high"
					/>{' '}
					Highest Score
				</label>
			</div>
			<div className="form-check form-check-inline">
				<label className="form-check-label">
					<input
						className="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						onChange={handleSortChange}
						checked={sort === 'low'}
						value="low"
					/>{' '}
					Lowest Score
				</label>
			</div>
		</div>
	)
}

export default SortOptions
