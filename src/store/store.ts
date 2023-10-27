import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as userAuthReducer } from "./userAuth/userAuth.slice";
import { reducer as userNameReducer } from "./userName/userName.slice";
import { reducer as userDataReducer } from "./userData/userData.slice";

const reducers = combineReducers({
    userAuth: userAuthReducer,
    userName: userNameReducer,
    userData: userDataReducer,
})

export const store = configureStore({
    reducer: reducers,
})

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;