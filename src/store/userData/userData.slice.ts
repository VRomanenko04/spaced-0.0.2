import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "../apis/firebaseAPI";

export interface IUserData {
    email?: string | null
    language?: string | null
    selectedPlan?: string | null
    username?: string | null
}

const initialState: IUserData = {
    email: null,
    language: null,
    selectedPlan: null,
    username: null
}

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<IUserData>) => {
            const currentState = state;

            const updatedUserData = {
                email: action.payload.email ?? currentState.email,
                language: action.payload.language ?? currentState.language,
                selectedPlan: action.payload.selectedPlan ?? currentState.selectedPlan,
                username: action.payload.username ?? currentState.username
            };

            const newState = {
                ...currentState,
                ...updatedUserData
            };

            const userDataString = JSON.stringify(newState);
            sessionStorage.setItem('userData', userDataString);

            return newState;
        }
    }
});

export const initializeData = async (uid: string | null) => {
    const storedUserData = sessionStorage.getItem("userData");
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        return Promise.resolve(userDataSlice.actions.setUserData(userData));
    } else {
        if (uid) {
            const fetchedUserData = await fetchUserData(uid);

            const { email, language, selectedPlan, username } = fetchedUserData;

            const userData = { email, language, selectedPlan, username };

            return userDataSlice.actions.setUserData(userData);
        } else {
            return null
        }
    }
}


export const { actions, reducer } = userDataSlice