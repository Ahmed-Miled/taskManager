import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ imgSrc, label }) => {
  return (
    <div className="item">
      <img src={imgSrc} alt={label} className="itemImage" />
      <div className="itemLabel">{label}</div>
    </div>
  );
};

Item.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Item;
