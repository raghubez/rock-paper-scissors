import React, { Component } from "react";
import { GAME_ENTRIES, PLAYER_NAME } from "../constants";

class Game extends Component {
  render() {
    const { props } = this.props;
    return (
      <div>
        <div className="Game__heading">Best of 5 Rounds</div>
        <div className="Game__roundCount">
          Rounds Completed: {props.noOfRounds}
        </div>
        <div className="Game__TotalWins__heading">Total Wins</div>
        <div className="Game__TotalWins">
          <div>
            {props.selectedMode === "hc" ? "You" : "Computer1"}:{" "}
            {props.totalPlayerOneWins}
          </div>
          <div>
            {props.selectedMode === "cc" ? "Computer2" : "Computer"}:{" "}
            {props.totalPlayerTwoWins}
          </div>
        </div>
        <div className="Game__playerName">
          {props.selectedMode === "hc" ? "You" : "Computer1"}
        </div>
        {props.isEntrySelected ? (
          <div className="Game__playerEntry">
            {props.playerOneEntry.toUpperCase()}
          </div>
        ) : (
          GAME_ENTRIES.map((entry, index) => (
            <button key={index} onClick={() => props.selectEntry(index)}>
              {entry.name.toUpperCase()}
            </button>
          ))
        )}
        <div className="Game__playerName">
          {props.selectedMode === "cc" ? "Computer2" : "Computer"}
        </div>
        <div className="Game__playerEntry">
          {props.playerTwoEntry
            ? props.playerTwoEntry.toUpperCase()
            : "WAITING..."}
        </div>
        {props.currentRoundResult && (
          <div className="Game__winner">
            <div>Current Round Result</div>
            <div>
              {props.currentRoundResult === "draw"
                ? props.currentRoundResult.toUpperCase()
                : `${
                    PLAYER_NAME[props.selectedMode][props.currentRoundResult]
                  } wins the round`}
            </div>
            {!props.gameWinner ? (
              props.selectedMode === "hc" ? (
                <button
                  onClick={() => props.startNextRound(props.selectedMode)}
                >
                  Start Next Round
                </button>
              ) : (
                <div>Next round starts in 5 sec</div>
              )
            ) : null}
          </div>
        )}
        {props.gameWinner && (
          <div className="Game__winner">
            <div>Game Winner</div>
            <div>
              {props.gameWinner === "draw"
                ? props.gameWinner.toUpperCase()
                : `${
                    PLAYER_NAME[props.selectedMode][props.gameWinner]
                  } wins the game`}
            </div>
            <button onClick={() => props.startNextGame()}>
              Start Next Game
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Game;
