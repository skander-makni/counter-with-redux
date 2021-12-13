import CounterRducers from "./CounterReducer";
import { createStore } from "redux";
import Counter from "../Component/Counter";

const store = createStore(CounterRducers);

export default store;
