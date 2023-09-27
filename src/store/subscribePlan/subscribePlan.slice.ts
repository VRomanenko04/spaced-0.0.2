import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string = '';

export const subscribePlanSlice = createSlice({
    name: 'сhosenPlan',
    initialState,
    reducers : {
        setChosenPlan: (_state, action: PayloadAction<string>) => {
            return action.payload;
        }
    }
})

export const { actions, reducer } = subscribePlanSlice;