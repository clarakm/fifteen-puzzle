import React, { Component } from 'react';
import Tile from './Tile';

class Board extends Component {
  // constructor() {
  //   super()
  // };


  render() {
    const puzzle = [];
    for (let i = 0; i < 15; i++) {
      puzzle.push(<Tile key={`tile-${i}`} />)
    }
    console.log(puzzle)
    return (
      <div className="board">
        {puzzle}
      </div>
    );
  };
};

export default Board;