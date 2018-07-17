export const selectMode = selectedMode => (dispatch, getState) => {
  dispatch({
    type: "SELECT_GAME_MODE",
    selectedMode
  });

  //if gamemode is computer vs computer then automate the rounds until winner is declared
  if (selectedMode === "cc") {
    dispatch({
      type: "SELECT_ENTRY"
    });

    const nextRound = () => {
      if (!getState().rockPaperScissors.gameWinner) {
        setTimeout(() => {
          dispatch({
            type: "START_NEXT_ROUND"
          });

          dispatch({
            type: "SELECT_ENTRY"
          });
          nextRound();
        }, 5000);
      }
    };
    nextRound();
  }
};

// dispatch this action when user selects entry
export const selectEntry = id => ({
  type: "SELECT_ENTRY",
  id
});

// dispatch this action to start next round manually
export const startNextRound = selectedMode => (dispatch, getState) => {
  dispatch({
    type: "START_NEXT_ROUND"
  });
};

// dispatch this action to start next game
export const startNextGame = () => ({
  type: "START_NEXT_GAME"
});
