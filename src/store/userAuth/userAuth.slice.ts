import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
    id: number | null
    email: string | null
    password: string | null
}

const initialState: IUser = {
    id: null,
    email: null,
    password: null
}

const userAuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.email = null;
            state.password = null;
            state.id = null;
        }
    }
})

export const { reducer, actions } = userAuthSlice;