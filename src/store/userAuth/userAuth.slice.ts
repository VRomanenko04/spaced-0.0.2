import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    id: string | null
    email: string | null
    token: string | null
}

const initialState: IUser = {
    id: null,
    email: null,
    token: null
}

const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        }
    }
})

export const { reducer, actions } = userAuthSlice;