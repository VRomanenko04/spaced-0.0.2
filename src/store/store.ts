import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as subscribePlanReducer } from "./subscribePlan/subscribePlan.slice";

const reducers = combineReducers({
    subscribePlan: subscribePlanReducer
})

export const store = configureStore({
    reducer: reducers,
})