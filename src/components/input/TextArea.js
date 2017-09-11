import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ label, change, value, rows }) => {
	return (
		<div className="form-group">
			{label && <label>{label}</label>}

			<textarea
				type="text"
				className="form-control"
				onChange={change}
				value={value}
				rows={rows || 3}
			/>
		</div>
	)
}

TextArea.propTypes = {
	label: PropTypes.string,
	change: PropTypes.func.isRequired,
	value: PropTypes.string,
	rows: PropTypes.number
}

export default TextArea
