import React from 'react';
import styles from '../styles/App.css';
const listItemStyle = {
  width: 75,
  height: 75,
};

const GamesListItem = ({game, joinGame, history, }) => {
  return (
      <div className="gameListItem">
          <img className="gameImage" src={game.gameImg}/>

<<<<<<< HEAD
          <div className="gameName">
            {game.gameName}
          </div>
=======
                  </p>
                  <div className="gameId is-size-5">
                    {game.gameId}
                  </div>
                  <span className="gameDescription is-size-5">
                    {game.gameDesc}
                  </span>
                </div>

              </div>


                <span>
                  <button type='button'
                    onClick={() => {
                      joinGame(game);
                      history.push(`/games/${game.gameId}`);
                    }}>
                      <a className="button is-small is-info">
                        Join Game
                      </a>
                  </button>
                </span>

            </article>
>>>>>>> CreateGameForm.jsx working // Form data being pushed to createNewGame method

          <div className="gameOwner">
            Game Master: {game.gameOwner}
          </div>

          <div className="gameDesc">
            {game.gameDesc}
          </div>
          <div className="gamePlayers">
            Players: {game.players.join(', ')}
          </div>
          <div className="joinButton">
            <button id="joinButtonSpace" type='button'
              onClick={() => {
                joinGame(game);
                history.push(`/games/${game.gameId}`);
              }}>
              Join Game
            </button>
          </div>
      </div>
  );
};

export default GamesListItem;
