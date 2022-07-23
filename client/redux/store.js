import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "./reducer/index";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
