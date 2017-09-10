import React from 'react'

const InputText = props => {
  const { label, change, value } = props
	return (
		<div className="form-group">
			<label>{label}</label>
			<input type="text" className="form-control" onChange={change} value={value} />
		</div>
	)
}

export default InputText
