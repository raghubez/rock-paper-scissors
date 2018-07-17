import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import GameModeSelect from "./components/GameModeSelect";
import Game from "./components/Game";
import * as actions from "./actions";

/** @class App */
/**
 * App component renders the page with all following components.<br>
  - GameModeSelect - Component to select Game Mode<br>
  - Game - Component where users can play the game<br>
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rock Paper Scissors</h1>
        </header>
        {!this.props.isModeSelected ? (
          <GameModeSelect selectMode={this.props.selectMode} />
        ) : (
          <Game props={this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  isModeSelected: state.rockPaperScissors.isModeSelected,
  isEntrySelected: state.rockPaperScissors.isEntrySelected,
  selectedMode: state.rockPaperScissors.selectedMode,
  noOfRounds: state.rockPaperScissors.noOfRounds,
  totalPlayerOneWins: state.rockPaperScissors.totalPlayerOneWins,
  totalPlayerTwoWins: state.rockPaperScissors.totalPlayerTwoWins,
  playerOneEntry: state.rockPaperScissors.playerOneEntry,
  playerTwoEntry: state.rockPaperScissors.playerTwoEntry,
  currentRoundResult: state.rockPaperScissors.currentRoundResult,
  gameWinner: state.rockPaperScissors.gameWinner
});

const mapDispatchToProps = dispatch => ({
  selectMode: selectedMode => dispatch(actions.selectMode(selectedMode)),
  selectEntry: id => dispatch(actions.selectEntry(id)),
  startNextRound: selectedMode =>
    dispatch(actions.startNextRound(selectedMode)),
  startNextGame: () => dispatch(actions.startNextGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
