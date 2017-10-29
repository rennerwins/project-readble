import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({
  label, change, value, disabled
}) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type="text"
      className="form-control"
      onChange={change}
      value={value || ''}
      disabled={disabled}
      required
    />
  </div>
);

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputText;
