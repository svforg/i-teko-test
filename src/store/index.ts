import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {useDispatch} from "react-redux";

import {rootReducer} from "./rootReducer";
import {TAppActions} from "./appActionsTyping";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);

export type TAppState = ReturnType<typeof rootReducer>;

// 1 параметр - описываем, что возвращает thunk
// 3 параметр - экстра аргументы
export type TAppThunk = ThunkAction<void, TAppState, unknown, TAppActions>

export function useAppDispatch() {
  const dispatch = useDispatch();
  return (ActionCreator: TAppThunk | TAppActions) => dispatch(ActionCreator);
}

// @ts-ignore
window.store = store;
















