
import React from 'react';
import ProgressBar from './ProgressBar';
import Items from './Items';
import '../Styles/Game.css';
import '../Styles/Items.css';

export default function Game() {
  return (
    <div className="gameBoard">
      {/* Player Section */}
      <div className="player">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Player Avatar" 
          className="playerAvatar" 
        />
        <div className="playerName">Player Name</div>
      </div>

      {/* Status Section */}
      <div className="status">
        <ProgressBar percentage={70} color="green" label="Level" />
        <ProgressBar percentage={50} color="red" label="Health" />
        <ProgressBar percentage={90} color="gold" label="Coins" />
      </div>

      {/* Inventory Section */}
      <div className="inventory">
        <h3>Inventory</h3>
        <Items />
      </div>

      {/* Store Button */}
      <div className="store">
        <button className="storeButton">Visit Store</button>
      </div>
    </div>
  );
}
