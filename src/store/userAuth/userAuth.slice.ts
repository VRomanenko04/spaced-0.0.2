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

            sessionStorage.setItem("user", JSON.stringify(state));
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;

            sessionStorage.removeItem("user");
        }
    }
});


export const initializeUser = () => {
    const storedUserData = sessionStorage.getItem("user");
    if (storedUserData) {
        const decodedData = decodeURIComponent(storedUserData);
        const userData = JSON.parse(decodedData);
        return userAuthSlice.actions.setUser(userData);
    }
    return null;
}


export const { reducer, actions } = userAuthSlice;