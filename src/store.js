import { createStore } from "redux";
import reducers from "./reducers/combinedReducers";

export const store=createStore(
    reducers,
    {}
);