import React from 'react';
import ProgressBar from './ProgressBar';
import '../Styles/Game.css';

export default function Game() {
  return (
    <div className="gameBoard">
      {/* Player Section */}
      <div className="player">
        <div>Player Picture</div>
      </div>

      {/* Status Section */}
      <div className="status">
        <div>
          <ProgressBar percentage={70} color="green" label="Level" />
        </div>
        <div>
          
          <ProgressBar percentage={50} color="red" label="Health" />
        </div>
        <div>
          
          <ProgressBar percentage={90} color="gold" label="Coins"/>
        </div>
      </div>

      {/* Inventory Section */}
      <div className="inventory">Inventory Items</div>

      {/* Store Button */}
      <div className="store">
        <button>Buy</button>
      </div>
    </div>
  );
}
