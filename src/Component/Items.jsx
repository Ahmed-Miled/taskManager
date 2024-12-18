import React from 'react';
import Item from './Item';
import question from '../assets/question.png';

//import '../Styles/Items.css';

const Items = () => {
  const inventoryItems = [
    { imgSrc: {question}, label: 'item 1' },
    { imgSrc: {question}, label: 'item 2' },
    { imgSrc: {question}, label: 'item 3' },
    { imgSrc: {question}, label: 'item 4' },

  ];

  return (
    <div className="itemsContainer">
      {inventoryItems.map((item, index) => (
        <Item key={index} imgSrc={question} label={item.label} />
      ))}
    </div>
  );
};

export default Items;
