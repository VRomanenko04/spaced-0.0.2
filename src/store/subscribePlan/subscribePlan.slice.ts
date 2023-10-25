import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { child, get, getDatabase, ref } from "firebase/database";

const initialState: string = '';

export const subscribePlanSlice = createSlice({
    name: 'сhosenPlan',
    initialState,
    reducers : {
        setChosenPlan: (_state, action: PayloadAction<string>) => {
            sessionStorage.setItem('subscribePlan', action.payload);
            return action.payload;
        }
    }
})

export const initializePlan = async (uid: string | null) => {
    const storedPlanData = sessionStorage.getItem("subscribePlan");
    if (storedPlanData) {
        return Promise.resolve(subscribePlanSlice.actions.setChosenPlan(storedPlanData));
    } else {
        const dbRef = ref(getDatabase());

        return get(child(dbRef, `users/${uid}/selectedPlan`)).
            then((snapshot) => {
                if (snapshot.exists()) {
                    const selectedPlan = snapshot.val();
                    console.log('Data complete');
                    return subscribePlanSlice.actions.setChosenPlan(selectedPlan);
                } else {
                    console.log('No data about Plan');
                    return null;
                }
            }).catch((err) => {
                console.log(err);
                return null;
            });
    }
}


export const { actions, reducer } = subscribePlanSlice;