import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer/index";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancers = [composeWithDevTools(), applyMiddleware(thunk)];

const store = createStore(reducer, compose(...enhancers));

export default store;
