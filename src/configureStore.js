import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";
import { verifyAuth } from "./actions/";

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
}
