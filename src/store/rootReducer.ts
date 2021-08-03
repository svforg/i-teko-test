import { combineReducers } from "redux";

import { participantsReducer } from "./participants/reducer";

export const rootReducer = combineReducers({
  participants: participantsReducer,
});