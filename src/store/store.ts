import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as subscribePlanReducer } from "./subscribePlan/subscribePlan.slice";
import { reducer as userAuthReducer } from "./userAuth/userAuth.slice";
import { reducer as userNameReducer } from "./userName/userName.slice";

const reducers = combineReducers({
    subscribePlan: subscribePlanReducer,
    userAuth: userAuthReducer,
    userName: userNameReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;