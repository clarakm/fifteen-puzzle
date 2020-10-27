import React from 'react';
import Board from './components/Board'

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <h1>Fifteen Puzzle</h1>
      <Board />
    </div>
  );
}

export default App;
