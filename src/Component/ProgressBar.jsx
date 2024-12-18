
import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/ProgressBar.css';

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="progressBarContainer">
      <div className="label">{label}</div>
      <div className="barBackground">
        <div
          className="barFill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      <div className="percentage">{percentage}%</div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired, // Text next to the bar
  percentage: PropTypes.number.isRequired, // Fill percentage (0-100)
  color: PropTypes.string.isRequired, // Color of the bar
};

export default ProgressBar;
