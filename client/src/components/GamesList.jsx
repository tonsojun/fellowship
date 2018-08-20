import React from 'react';
import GamesListItem from './GamesListItem.jsx';
import styles from '../styles/App.css'

const GamesList = ({games, joinGame}) => {
  return (
    <div className="gamesList">
     {games.map(function (game) {
       return (
        <GamesListItem 
          game = { game } key = { game._id }
          joinGame={joinGame}
        />
       )
     }) 
     }
    </div>
  );
};

export default GamesList;
