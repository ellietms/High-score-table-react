import React from 'react';
import AllScores from './scores.js'
import HighScoreTable from './HighScoreTable'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>High Scores Per Country</h1>
      <HighScoreTable CountryScores = {AllScores}/>
    </div>
  );
}

export default App;
