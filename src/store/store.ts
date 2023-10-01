import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as subscribePlanReducer } from "./subscribePlan/subscribePlan.slice";
import { reducer as userAuthReducer } from "./userAuth/userAuth.slice";

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
    subscribePlan: subscribePlanReducer,
    userAuth: userAuthReducer,
})

export const store = configureStore({
    reducer: reducers,
})