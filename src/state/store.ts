import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import { actions } from "./actions";

export type AppRootStateType = ReturnType<typeof reducer>;

export const store = createStore(reducer);

export const bindActions = bindActionCreators(actions, store.dispatch);
