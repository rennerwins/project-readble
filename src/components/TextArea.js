import React from 'react'

const TextArea = props => {
  const { label, change, value, rows } = props
	return (
		<div className="form-group">
			<label>{label}</label>
			<textarea type="text" className="form-control" onChange={change} value={value} rows={rows || 3} />
		</div>
	)
}

export default TextArea
