import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rockPaperScissorsReducer from "./reducers";

export const reducers = combineReducers({
  rockPaperScissors: rockPaperScissorsReducer
});

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export const store = configureStore();
