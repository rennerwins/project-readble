import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ({
  label, value, change, disabled
}) => (
  <div className="form-group">
    <label>Category</label>
    <select className="form-control" value={value} onChange={change} disabled={disabled}>
      <option value="react">React</option>
      <option value="redux">Redux</option>
      <option value="udacity">Udacity</option>
    </select>
  </div>
);

SelectOption.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool
};

export default SelectOption;
