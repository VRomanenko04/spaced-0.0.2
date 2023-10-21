import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserData } from '../apis/firebaseAPI';

export const loadUserData = createAsyncThunk('user/loadUserData', async (uid: string) => {
    const userData = await fetchUserData(uid);
    return userData;
});

const userSlice = createSlice({
    name: 'username',
    initialState: {
        data: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(loadUserData.rejected, (state, action: any) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});


export const { reducer, actions } =  userSlice;
