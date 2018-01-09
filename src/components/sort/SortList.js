import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SortOption from './SortOption';

class SortList extends Component {
  state = {
    sortOptions: {
      high: {
        label: 'Highest Score'
      },
      low: {
        label: 'Lowest Score'
      },
      new: {
        label: 'Newest'
      },
      old: {
        label: 'Oldest'
      }
    }
  };

  render() {
    const { sortOptions } = this.state;
    const { sort, handleSortChange } = this.props;

    return (
      <div className="form-inline">
        <p className="mr-3 mb-0">
          <strong>Sort by : </strong>
        </p>

        {Object.keys(sortOptions).map(value => (
          <SortOption
            key={value}
            sort={sort}
            handleSortChange={handleSortChange}
            value={value}
            label={sortOptions[value].label}
          />
        ))}
      </div>
    );
  }
}

SortList.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSortChange: PropTypes.func.isRequired
};

export default SortList;
