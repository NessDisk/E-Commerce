import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
