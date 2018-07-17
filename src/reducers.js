import { GAME_ENTRIES } from "./constants";
import { getCurrentRoundWinner, getGameWinner } from "./utils";

export default (
  state = {
    isModeSelected: false,
    isEntrySelected: false,
    selectedMode: null,
    noOfRounds: 0,
    totalPlayerOneWins: 0,
    totalPlayerTwoWins: 0,
    playerOneEntry: null,
    playerTwoEntry: null,
    currentRoundResult: null,
    gameWinner: null
  },
  action
) => {
  switch (action.type) {
    case "SELECT_GAME_MODE":
      return {
        ...state,
        isModeSelected: true,
        selectedMode: action.selectedMode
      };
    case "SELECT_ENTRY":
      const playerOneEntry =
        state.selectedMode === "hc"
          ? action.id
          : Math.floor(Math.random() * GAME_ENTRIES.length);
      const playerTwoEntry = Math.floor(Math.random() * GAME_ENTRIES.length);
      const currentRoundResult = getCurrentRoundWinner(
        playerOneEntry,
        playerTwoEntry
      );
      const totalPlayerOneWins =
        currentRoundResult === "playerone"
          ? state.totalPlayerOneWins + 1
          : state.totalPlayerOneWins;
      const totalPlayerTwoWins =
        currentRoundResult === "playertwo"
          ? state.totalPlayerTwoWins + 1
          : state.totalPlayerTwoWins;
      return {
        ...state,
        isEntrySelected: true,
        noOfRounds: state.noOfRounds + 1,
        currentRoundResult,
        playerOneEntry: GAME_ENTRIES[playerOneEntry]["name"],
        playerTwoEntry: GAME_ENTRIES[playerTwoEntry]["name"],
        totalPlayerOneWins,
        totalPlayerTwoWins,
        gameWinner: getGameWinner(
          state.noOfRounds + 1,
          totalPlayerOneWins,
          totalPlayerTwoWins
        )
      };
    case "START_NEXT_ROUND":
      return {
        ...state,
        isEntrySelected: false,
        playerOneEntry: null,
        playerTwoEntry: null,
        currentRoundResult: null
      };
    case "START_NEXT_GAME":
      return {
        ...state,
        isModeSelected: false,
        isEntrySelected: false,
        selectedMode: null,
        noOfRounds: 0,
        totalPlayerOneWins: 0,
        totalPlayerTwoWins: 0,
        playerOneEntry: null,
        playerTwoEntry: null,
        currentRoundResult: null,
        gameWinner: null
      };
    default:
      return state;
  }
};
