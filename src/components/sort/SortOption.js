import React from 'react';
import PropTypes from 'prop-types';

const SortOption = ({
  sort, handleSortChange, label, value
}) => (
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
);

SortOption.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SortOption;
