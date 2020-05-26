import React from 'react';
import AllScores from './scores.js'
import HighScoreTable from './HighScoreTable'
import './App.css';

function App() {
  return (
    <div>
      <HighScoreTable CountryScores = {AllScores}/>
    </div>
  );
}

export default App;
