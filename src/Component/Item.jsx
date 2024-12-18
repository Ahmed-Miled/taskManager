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
  imgSrc: PropTypes.string.isRequired, // URL or path to the image
  label: PropTypes.string.isRequired, // Text for the item
};

export default Item;
