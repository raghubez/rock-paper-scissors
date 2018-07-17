import { GAME_ENTRIES, TOTAL_NO_OF_ROUNDS } from "./constants";

// function to determine current round winner camparing entries of both players
export const getCurrentRoundWinner = (playerOneEntry, playerTwoEntry) => {
  if (playerOneEntry === playerTwoEntry) {
    return "draw";
  } else if (
    // if index of playerone entry is last one in list and player two entry is first one then playertwo wins the round
    // this is to make logic generic on adding more entries in the game
    playerOneEntry + 1 === GAME_ENTRIES.length &&
    playerTwoEntry === 0
  ) {
    return "playertwo";
  } else if (
    // if index of playerone two entry is last one in list and player one entry is first one then playerone wins the round
    playerTwoEntry + 1 === GAME_ENTRIES.length &&
    playerOneEntry === 0
  ) {
    return "playerone";
    // in other cases index of whichever players entry is greater wins the round
  } else if (playerOneEntry > playerTwoEntry) {
    return "playerone";
  } else {
    return "playertwo";
  }
};

// function to determine game Winner
// this also takes into consideration number of draws and number of rounds left
//eg. if player one wins 2 and player two wins only one round after 4 rounds out of total 5 rounds
//player one will be decalred a winner
export const getGameWinner = (
  noOfRoundsCompleted,
  totalPlayerOneWins,
  totalPlayerTwoWins
) => {
  if (totalPlayerOneWins === totalPlayerTwoWins) {
    return noOfRoundsCompleted === TOTAL_NO_OF_ROUNDS ? "draw" : null;
  }

  if (totalPlayerOneWins - totalPlayerTwoWins > 0) {
    if (
      totalPlayerOneWins -
        totalPlayerTwoWins -
        (TOTAL_NO_OF_ROUNDS - noOfRoundsCompleted) >
      0
    ) {
      return "playerone";
    }
  }

  if (totalPlayerTwoWins - totalPlayerOneWins > 0) {
    if (
      totalPlayerTwoWins -
        totalPlayerOneWins -
        (TOTAL_NO_OF_ROUNDS - noOfRoundsCompleted) >
      0
    ) {
      return "playertwo";
    }
  }
};
