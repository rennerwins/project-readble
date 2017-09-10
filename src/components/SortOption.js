import React from 'react'

const SortOption = props => {
	const { sort, handleSortChange, label, value } = props

	return (
		<div className="form-check form-check-inline">
			<label className="form-check-label">
				<input
					className="form-check-input"
					type="radio"
					selected
					name="inlineRadioOptions"
					onChange={handleSortChange}
					checked={sort === value}
					value={value}
				/>{' '}
				{label}
			</label>
		</div>
	)
}

export default SortOption
