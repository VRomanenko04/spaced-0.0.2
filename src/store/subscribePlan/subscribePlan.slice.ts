import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: string = '';

export const subscribePlanSlice = createSlice({
    name: 'сhosenPlan',
    initialState,
    reducers : {
        setChosenPlan: (_state, action: PayloadAction<string>) => {
            Cookies.set('subscribePlan', action.payload);
            return action.payload;
        }
    }
})


export const initializePlan = () => {
    const storedPlanData = Cookies.get("subscribePlan");
    if (storedPlanData) {
        return subscribePlanSlice.actions.setChosenPlan(storedPlanData);
    } else {
        return null;
    }
}

export const { actions, reducer } = subscribePlanSlice;