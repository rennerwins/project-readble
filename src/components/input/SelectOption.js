import React from 'react'

const SelectOption = props => {
  const { label, value, change, disabled } = props
	return (
		<div className="form-group">
			<label>Example select</label>
			<select className="form-control" value={value} onChange={change} disabled={disabled}>
				<option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="udacity">Udacity</option>
			</select>
		</div>
	)
}

export default SelectOption
