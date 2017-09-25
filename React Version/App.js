import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import scores from './scores.json';

import ScoreRow from './ScoreRow';

class App extends Component {
  render() {
    return (
      <div>
        <img src="spaceinv.jpg" className="space"/>
        <img src="ghost.png" className="pacman"/>
        <h1>Leaderboard!</h1>
    
        <table id="scoretable" width="100%">
            <tr className="test">
                <th onclick="sortTable(0)">Name</th>
                <th onclick="sortTable(1)">School</th>
                <th onclick="sortTable(2)">Game Played</th>
                <th onclick="sortTable(3)">Score</th>            
            </tr>
            {
              scores
                .sort((a,b) => {
                  return b.score - a.score
                })
                .map((score) => {
                  return <ScoreRow name={score.name} school={score.school} score={score.score} />
                })
            }
        </table>
    
        <div className="form">
            <p>Name: <input type="text" id="name"/> School: <input type="text" id="school"/> Game Played: <input type="text" id="game"/> Score: <input type="text" id="score"/> </p>
            <button onclick='addRow()'> + </button>
        </div>    
    
        <img src="bglgroup.jpg" className="bgl"/>
      </div>
    );
  }
}

export default App;
