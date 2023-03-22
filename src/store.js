import { combineReducers, createStore } from "redux";
import todoreducer from "./reducer/todoRrducer";

export default createStore(combineReducers({todoreducer}))