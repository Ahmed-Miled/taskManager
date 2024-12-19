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
        <div className="percentage">
          {color === "gold" ? `${percentage}K / 100K` : `${percentage}%`}
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  label: PropTypes.string.isRequired, 
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
