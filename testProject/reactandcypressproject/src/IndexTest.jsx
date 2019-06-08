import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';

function IndexTest() {
    return (
        <div className="game">
        <div className="game-board">
        </div>
        <div className="game-info">
          <div>No one winner!</div>
          <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button>Asc history</button>
              &nbsp;
              <button>Desc history</button>
          </div>
        </div>
      </div>
    );
}

export default IndexTest;