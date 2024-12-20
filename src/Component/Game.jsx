import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Items from './Items';
import '../Styles/Game.css';
import '../Styles/Items.css';

export default function Game() {
  // Example data for player
  const [playerName, setPlayerName] = useState('Mario');
  const [playerId, setPlayerId] = useState('12345');
  const [characterName, setCharacterName] = useState('DragonSlayer');

  return (
    <div className="gameBoard">
      {/* Player Section */}
      <div className="player">
        <img 
          src="https://via.placeholder.com/100" 
          alt="Player Avatar" 
          className="playerAvatar" 
        />
        <div className="playerName">{playerName}</div>
      </div>

      {/* Status Section */}
      <div className="status">
        <ProgressBar percentage={70} color="green" label="Level" />
        <ProgressBar percentage={50} color="red" label="Health" />
        <ProgressBar percentage={70} color="gold" label="Coins" />
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
